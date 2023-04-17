import dynamic from "next/dynamic";
import Head from "next/head";
import { WagmiConfig } from "wagmi";
import { Provider, useDispatch, useSelector } from "react-redux";

const Web3Modal = dynamic(() =>
  import("@web3modal/react").then((mod) => mod.Web3Modal)
);
import {
  ethereumClient,
  projectId,
  wagmiClient,
  StoreType,
  Snackbars,
  getAllSnackbars,
  store,
} from "evmos-wallet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TermOfServices, Footer, Container } from "ui-helpers";

function SnackbarsInternal() {
  const valueRedux = useSelector((state: StoreType) => getAllSnackbars(state));
  const dispatch = useDispatch();
  return <Snackbars valueRedux={valueRedux} dispatch={dispatch} />;
}
import { StatefulHeader } from "../src/StatefulHeader";
const Content = dynamic(() => import("../src/components/staking/Content"));

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <>
            <Head>
              <title>Staking Page</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
              <TermOfServices />
              <Container>
                <>
                  <SnackbarsInternal />
                  <StatefulHeader pageName="Staking" />
                  <div className="container mx-auto mb-auto overflow-auto">
                    <Content />
                  </div>
                  <Footer />
                </>
              </Container>
            </main>
          </>
        </WagmiConfig>
      </QueryClientProvider>
      <Web3Modal
        projectId={projectId}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ethereumClient={ethereumClient}
      />
    </Provider>
  );
}