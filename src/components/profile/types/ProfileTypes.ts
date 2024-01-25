export type ProfileProps = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  walletAddress: string;
  profilePicture: string;
  address: string;
  age: number;
  targets: FeedProps[];
  targetsCreated: FeedProps[];
  avatar: string;
};

export type FeedProps = {
  targetName: string;
  targetImage: string;
  targetCategory: string;
  targetRating: number;
  targetReviews: {};
  lastFeedAt: string;
};
