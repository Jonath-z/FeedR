import { connectUTU } from "./lib/web3/utu";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";

function App() {
  return (
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: process.env.REACT_APP_DYNAMIC_LAB_ENVIRONMENT_ID ?? "",
        walletConnectors: [EthereumWalletConnectors, ZeroDevSmartWalletConnectors],
        eventsCallbacks: {
          onAuthSuccess: async ({ primaryWallet }) => {
            if (primaryWallet) {
              await connectUTU();
            }
          },
          onEmbeddedWalletCreated: async () => {
            await connectUTU();
          },
        },
      }}
    >
      <Layout className="w-full h-screen">
        <LandingPage />
      </Layout>
    </DynamicContextProvider>
  );
}

export default App;
