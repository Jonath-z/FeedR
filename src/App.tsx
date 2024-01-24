import "./App.css";
import { connectUTU } from "./lib/web3/utu";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="w-full h-screen">
      <Layout>
        <LandingPage/>
      </Layout>
      
    </div>
  );
}

export default App;
