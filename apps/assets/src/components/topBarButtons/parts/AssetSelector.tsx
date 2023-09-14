import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { formatAmount } from "./helpers";
import {
  AmountInput,
  CryptoSelectorBalanceBox,
  CryptoSelectorBalanceText,
  CryptoSelectorBox,
  CryptoSelectorDropdownBox,
} from "ui-helpers";
import { chains } from "@evmos-apps/registry";
import { Prefix, TokenMinDenom } from "evmos-wallet/src/registry-actions/types";
import { CryptoSelector } from "ui-helpers";
import {
  Address,
  getTokenByMinDenom,
  getTokens,
  useTokenBalance,
} from "evmos-wallet";
import { CryptoSelectorTitle } from "ui-helpers";
import { useTranslation } from "next-i18next";
import { formatUnits } from "viem";
import { useTokenPrice } from "../hooks/useTokenPrice";
import { max } from "helpers";
import { getChainByTokenDenom } from "evmos-wallet/src/registry-actions/get-chain-by-token-min-denom";

type Asset = {
  chainPrefix: Prefix;
  denom: TokenMinDenom;
  amount: bigint;
};

const tokenToUSD = (amount: bigint, price: number, decimals: number) => {
  const unformmatedUsd = Number(
    formatUnits((amount * BigInt(~~(1000 * Number(price)))) / 1000n, decimals)
  );
  return unformmatedUsd.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const AssetSelector = ({
  fee,
  value,
  onChange,
  address,
}: PropsWithChildren<{
  value: Asset;
  onChange: (value: Asset) => void;
  address?: Address<Prefix>;
  fee?: {
    amount: bigint;
    denom: TokenMinDenom;
  };
}>) => {
  const { t } = useTranslation();
  // const [selectedChainPrefix, setSelectedChainPrefix] =
  //   useState<Prefix>("evmos");

  const selectedChain = chains[value.chainPrefix];
  const selectedToken = getTokenByMinDenom(value.denom);

  const tokenOptions = useMemo(() => {
    return getTokens()
      .sort(({ denom: a }, { denom: b }) => (a > b ? 1 : -1))
      .map(({ minCoinDenom }) => minCoinDenom);
  }, []);

  const networkOptions = useMemo(() => {
    const chain = getChainByTokenDenom(selectedToken.minCoinDenom);
    if (chain.prefix === "evmos")
      return Object.values(chains).map(({ prefix }) => prefix);

    return [chain.prefix, "evmos"] as Prefix[];
  }, [selectedToken]);

  /**
   * When network changes, check if the selected token is available on the new network.
   * If not, set the first available token as the selected token.
   */
  useEffect(() => {
    if (tokenOptions.includes(value.denom)) return;
    onChange({
      ...value,
      denom: tokenOptions[0],
    });
  }, [tokenOptions]);

  const price = useTokenPrice(value.denom);

  const { balance, isFetching: isFetchingBalance } = useTokenBalance(
    address,
    value?.denom
  );

  const amountInUsd = price
    ? tokenToUSD(value.amount, Number(price), selectedToken.decimals)
    : null;

  const isFeeTokenAndSelectedTokenEqual = fee && fee.denom === value.denom;
  const maxAllowedTransferAmount = useMemo(() => {
    if (!balance) return 0n;
    if (isFeeTokenAndSelectedTokenEqual) {
      return max(balance.value - fee.amount, 0n);
    }
    return balance.value;
  }, [balance, fee, isFeeTokenAndSelectedTokenEqual]);

  return (
    <CryptoSelectorBox>
      <div className="flex justify-between">
        <CryptoSelectorDropdownBox>
          <CryptoSelectorTitle>
            {t("transfer.section.asset.token")}
          </CryptoSelectorTitle>
          <CryptoSelector
            value={value.denom}
            onChange={(denom) =>
              onChange({
                chainPrefix: getChainByTokenDenom(denom).prefix,
                amount: 0n,
                denom,
              })
            }
          >
            <CryptoSelector.Button
              src={`/assets/tokens/${selectedToken.denom}.png`}
              variant="black"
            >
              {selectedToken.denom.toLowerCase()}
            </CryptoSelector.Button>
            <CryptoSelector.Options
              variant="multiple"
              className="left-0"
              label={t("transfer.section.token.label")}
            >
              {tokenOptions.map((token) => {
                const { denom } = getTokenByMinDenom(token);
                return (
                  <CryptoSelector.Option
                    src={`/assets/tokens/${denom}.png`}
                    key={token}
                    value={token}
                  >
                    {denom}
                  </CryptoSelector.Option>
                );
              })}
            </CryptoSelector.Options>
          </CryptoSelector>
        </CryptoSelectorDropdownBox>
        <CryptoSelectorDropdownBox>
          <CryptoSelectorTitle>
            {t("transfer.section.asset.network")}
          </CryptoSelectorTitle>
          <CryptoSelector
            value={value.chainPrefix}
            onChange={(prefix) => {
              onChange({
                ...value,
                amount: 0n,
                chainPrefix: prefix,
              });
            }}
          >
            <CryptoSelector.Button
              src={`/assets/chains/${value.chainPrefix}.png`}
            >
              {selectedChain.name}
            </CryptoSelector.Button>
            <CryptoSelector.Options
              label={t("transfer.section.network.label")}
              className="right-0"
            >
              {networkOptions.map((value) => {
                const chain = chains[value];
                return (
                  <CryptoSelector.Option
                    src={`/assets/chains/${value}.png`}
                    key={value}
                    value={value}
                  >
                    {chain.name}
                  </CryptoSelector.Option>
                );
              })}
            </CryptoSelector.Options>
          </CryptoSelector>
        </CryptoSelectorDropdownBox>
      </div>
      <AmountInput
        value={value.amount}
        max={maxAllowedTransferAmount}
        onChange={(amount) => {
          onChange({
            ...value,
            amount,
          });
        }}
        decimals={selectedToken.decimals}
      />
      <CryptoSelectorBalanceBox>
        <div>{amountInUsd !== null && `≈${amountInUsd}`}</div>
        <div>
          {!balance && isFetchingBalance && (
            <CryptoSelectorBalanceText>
              {t("transfer.section.asset.balance.loading")}
            </CryptoSelectorBalanceText>
          )}
          {balance && (
            <>
              <div>
                <CryptoSelectorBalanceText>
                  {t("transfer.section.asset.balance")}{" "}
                </CryptoSelectorBalanceText>
                {formatAmount(balance?.formattedLong) ?? "0"}{" "}
                {selectedToken.denom}
              </div>
            </>
          )}
        </div>
      </CryptoSelectorBalanceBox>
      {/* TODO: show it when the user clicks on max amount */}
      {/* <ErrorMessage variant="info" displayIcon={false}>
        {t("message.gas.fee.reserved.amount")}
      </ErrorMessage> */}
      {/* TODO: show it when the balance is not enough. We are showing it below the sending 
      Remove that one and show it here. */}
      {/* <ErrorMessage displayIcon={false}>
        {t("message.insufficient.balance")}
      </ErrorMessage> */}
    </CryptoSelectorBox>
  );
};
