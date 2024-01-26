import "./App.css";
import { Profile } from "./components/profile/Profile";
import { ProfileProps } from "./components/profile/types/ProfileTypes";
import { connectUTU } from "./lib/web3/utu";
import { profile } from "./mocks/profile";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-5xl">
      Welcome to FeedR
      <button onClick={connectUTU} className="text-lg  mt-5">
        Connect UTU
      </button>{" "}
      <br />
      <Profile {...profile} />
      {/* the props is of type profileProps /> */}
    </div>
  );
}

export default App;
