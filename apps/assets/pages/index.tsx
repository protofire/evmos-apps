// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AssetsTable from "../src/components/asset/table/AssetsTable";
import {
  store,
  Snackbars,
  StoreType,
  getAllSnackbars,
  WalletProvider,
} from "evmos-wallet";
import {
  Container,
  MavaWidget,
  ModalWithTransitions,
  TermOfServices,
} from "ui-helpers";
import { Provider, useDispatch, useSelector } from "react-redux";
import { StatefulHeader } from "stateful-components";
import { HeadComponent } from "../src/components/asset/HeadComponent";
import { GoogleAnalytics } from "../src/components/asset/GoogleAnalytics";
import { StatefulFooter } from "stateful-components";
import { MixpanelProvider } from "tracker";
import { GiveFeedback } from "../src/GiveFeedback";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TransferModal } from "../src/components/topBarButtons/transfer/Modal";
import { useTransferModal } from "../src/components/topBarButtons/transfer/hooks/useTransferModal";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}

function SnackbarsInternal() {
  const valueRedux = useSelector((state: StoreType) => getAllSnackbars(state));
  const dispatch = useDispatch();
  return <Snackbars valueRedux={valueRedux} dispatch={dispatch} />;
}
export default function Home() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <WalletProvider>
          <MixpanelProvider
            config={{ ip: false }}
            token={process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ?? ""}
          >
            <>
              <HeadComponent />
              <GoogleAnalytics />
              <main>
                <TermOfServices />
                <GiveFeedback />
                <Container>
                  <>
                    <SnackbarsInternal />
                    <StatefulHeader pageName="Portfolio" page="assets" />
                    <MavaWidget />
                    <div className="container mx-auto mb-auto overflow-auto">
                      <AssetsTable />
                    </div>
                    <StatefulFooter />
                    <Modals />
                  </>
                </Container>
              </main>
            </>
          </MixpanelProvider>
        </WalletProvider>
      </QueryClientProvider>
    </Provider>
  );
}
function Modals() {
  const { show, setShow } = useTransferModal();

  return (
    <ModalWithTransitions show={show} setShow={setShow} propClose={true}>
      <TransferModal />
    </ModalWithTransitions>
  );
}
