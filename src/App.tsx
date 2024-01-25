import { connectUTU } from "./lib/web3/utu";
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react-core";
// import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

function App() {
  return (
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: process.env.REACT_APP_DYNAMIC_LAB_ENVIRONMENT_ID ?? "",
        walletConnectors: [EthereumWalletConnectors],
        eventsCallbacks: {
          onAuthSuccess: async ({ primaryWallet }) => {
            console.log({ primaryWallet });
            await connectUTU();
          },
        },
      }}
    >
      {/*<DynamicWagmiConnector>*/}
      <div className="w-full h-screen flex flex-col justify-center gap-5 items-center text-5xl">
        Welcome to FeedR
        <button onClick={connectUTU} className="text-lg  mt-5">
          Connect UTU
        </button>
        <DynamicWidget />
      </div>
      {/*</DynamicWagmiConnector>*/}
    </DynamicContextProvider>
  );
}

export default App;
