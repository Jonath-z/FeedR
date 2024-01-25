import "./App.css";
import { Profile } from "./components/profile/Profile";
import { ProfileProps } from "./components/profile/types/ProfileTypes";
import { connectUTU } from "./lib/web3/utu";

const profile: ProfileProps = {
  firstName: "John",
  lastName: "Doe",
  dateOfBirth: "1990-01-01",
  email: "john.doe@example.com",
  walletAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  profilePicture: "https://avatars0.githubusercontent.com/u/35900628?v=4",
  address: "123 Main St, Cityville",
  age: 32,
  targets: [
    {
      targetName: "Example Restaurant",
      targetImage: "https://avatars0.githubusercontent.com/u/35900628?v=4",
      targetCategory: "Food & Dining",
      targetRating: 4.5,
      targetReviews: {
        positive: 120,
        neutral: 30,
        negative: 5,
      },
      lastFeedAt: "2022-03-01T12:30:00Z",
    },
    {
      targetName: "Example Restaurant",
      targetImage: "https://avatars0.githubusercontent.com/u/35900628?v=4",
      targetCategory: "Food & Dining",
      targetRating: 4.5,
      targetReviews: {
        positive: 120,
        neutral: 30,
        negative: 5,
      },
      lastFeedAt: "2022-03-01T12:30:00Z",
    },
    {
      targetName: "Example Restaurant",
      targetImage: "https://avatars0.githubusercontent.com/u/35900628?v=4",
      targetCategory: "Food & Dining",
      targetRating: 4.5,
      targetReviews: {
        positive: 120,
        neutral: 30,
        negative: 5,
      },
      lastFeedAt: "2022-03-01T12:30:00Z",
    },
  ],
  targetsCreated: [
    {
      targetName: "Example Restaurant",
      targetImage: "https://avatars0.githubusercontent.com/u/35900628?v=4",
      targetCategory: "Food & Dining",
      targetRating: 4.5,
      targetReviews: {
        positive: 120,
        neutral: 30,
        negative: 5,
      },
      lastFeedAt: "2022-03-01T12:30:00Z",
    },
    {
      targetName: "Example Restaurant",
      targetImage: "https://avatars0.githubusercontent.com/u/35900628?v=4",
      targetCategory: "Food & Dining",
      targetRating: 4.5,
      targetReviews: {
        positive: 120,
        neutral: 30,
        negative: 5,
      },
      lastFeedAt: "2022-03-01T12:30:00Z",
    },
    {
      targetName: "Example Restaurant",
      targetImage: "https://avatars0.githubusercontent.com/u/35900628?v=4",
      targetCategory: "Food & Dining",
      targetRating: 4.5,
      targetReviews: {
        positive: 120,
        neutral: 30,
        negative: 5,
      },
      lastFeedAt: "2022-03-01T12:30:00Z",
    },
    {
      targetName: "Example Restaurant",
      targetImage: "https://avatars0.githubusercontent.com/u/35900628?v=4",
      targetCategory: "Food & Dining",
      targetRating: 4.5,
      targetReviews: {
        positive: 120,
        neutral: 30,
        negative: 5,
      },
      lastFeedAt: "2022-03-01T12:30:00Z",
    },
    {
      targetName: "Example Restaurant",
      targetImage: "https://avatars0.githubusercontent.com/u/35900628?v=4",
      targetCategory: "Food & Dining",
      targetRating: 4.5,
      targetReviews: {
        positive: 120,
        neutral: 30,
        negative: 5,
      },
      lastFeedAt: "2022-03-01T12:30:00Z",
    },
    {
      targetName: "Example Restaurant",
      targetImage: "https://avatars0.githubusercontent.com/u/35900628?v=4",
      targetCategory: "Food & Dining",
      targetRating: 4.5,
      targetReviews: {
        positive: 120,
        neutral: 30,
        negative: 5,
      },
      lastFeedAt: "2022-03-01T12:30:00Z",
    },
  ],
  avatar: "https://example.com/avatar.jpg",
};

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-5xl">
      Welcome to FeedR
      <button onClick={connectUTU} className="text-lg  mt-5">
        Connect UTU
      </button>{" "}
      {/* Welcome to FeedR
      <button onClick={connectUTU} className="text-lg  mt-5">
        Connect UTU
      </button> */}
      <Profile {...profile} />
    </div>
  );
}

export default App;
