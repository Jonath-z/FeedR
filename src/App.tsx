import { connectUTU } from "./lib/web3/utu";
import Layout from "./components/layouts/Layout";
import LandingPage from "./pages/LandingPage";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Onboard from "./pages/Onboard";
import { Profile } from "./components/profile/Profile";
import { profile } from "./mocks/profile";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#fff",
            color: "#000",
          },
          // Default options for specific types
          success: {
            duration: 2000,
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route path="onboard" element={<Onboard />} />
          <Route
            path="profile"
            element={
              <Layout>
                <Profile {...profile} />
              </Layout>
            }
          />

          <Route
            path="home"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </DynamicContextProvider>
  );
}

export default App;
