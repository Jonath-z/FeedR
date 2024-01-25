import { connectUTU } from "./lib/web3/utu";
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
      <div className="w-full h-screen flex flex-col justify-center gap-5 items-center text-5xl">
        Welcome to FeedR
        <button onClick={connectUTU} className="text-lg  mt-5">
          Connect UTU
        </button>
        <DynamicWidget />
      </div>
    </DynamicContextProvider>
  );
}

export default App;
