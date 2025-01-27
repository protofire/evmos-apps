import { erc20ABI } from "wagmi";
import { Address, evmosClient } from "../wallet";
import { getTokens } from "./get-tokens";
import { normalizeToEth, normalizeToEvmos } from "../wallet/utils/addresses";
import { makeBalance } from "./utils/make-balance";
import { Hex } from "viem";

export async function getERC20TokenBalances({
  address,
}: {
  address: Address<"evmos">;
}) {
  const tokens = getTokens().filter(({ erc20Address }) => erc20Address);
  const ethAddress = normalizeToEth(address);
  const response = await evmosClient.multicall({
    contracts: tokens.map((token) => ({
      abi: erc20ABI,
      address: token.erc20Address as Hex,
      functionName: "balanceOf",
      args: [ethAddress],
    })),
  });

  const evmosAddress = normalizeToEvmos(address);
  return response
    .map((response, index) => {
      const token = tokens[index];
      return makeBalance(token, evmosAddress, response.result ?? "0", "ERC20");
    })
    .filter(({ value }) => value > 0n);
}
