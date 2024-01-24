import "./App.css";
import { connectUTU } from "./lib/web3/utu";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-5xl">
      Welcome to FeedR
      <button onClick={connectUTU} className="text-lg  mt-5">
        Connect UTU
      </button>
    </div>
  );
}

export default App;
