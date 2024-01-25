import "./App.css";
import { connectUTU } from "./lib/web3/utu";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Layout className="w-full h-screen">
        <LandingPage />
      </Layout>
    </div>
  );
}

export default App;
