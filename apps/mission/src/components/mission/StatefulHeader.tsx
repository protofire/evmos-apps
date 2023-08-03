// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { WalletConnection, StoreType } from "evmos-wallet";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "ui-helpers";
import { Dispatch, SetStateAction } from "react";
import { CLICK_EVMOS_LOGO, useTracker } from "tracker";

import { StepsContextProvider } from "copilot";
import { Copilot, CopilotButton, steps } from "copilot";

export const StatefulHeader = () => {
  const wallet = useSelector((state: StoreType) => state.wallet.value);
  const dispatch = useDispatch();

  const { handlePreClickAction } = useTracker(CLICK_EVMOS_LOGO);
  return (
    <StepsContextProvider steps={steps}>
      <>
        <Copilot />
        <Header
          walletConnectionButton={
            <WalletConnection
              copilotModal={({
                beforeStartHook,
              }: {
                beforeStartHook: Dispatch<SetStateAction<boolean>>;
              }) => <CopilotButton beforeStartHook={beforeStartHook} />}
              dispatch={dispatch}
              walletExtension={wallet}
            />
          }
          onClick={() => {
            handlePreClickAction({
              wallet: wallet?.evmosAddressEthFormat,
              provider: wallet?.extensionName,
              page: "mission",
            });
          }}
        />
      </>
    </StepsContextProvider>
  );
};
