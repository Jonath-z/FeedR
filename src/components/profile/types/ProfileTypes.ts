/**
 * this is a type for profile props
 */
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
/**
 * this is a type for feed props
 */

export type FeedProps = {
  targetName: string;
  targetImage: string;
  targetCategory: string;
  targetRating: number;
  targetReviews: {};
  lastFeedAt: string;
};

/**
 * this is a type for feed props
 */
export interface CopyBoardProps {
  textToCopy: string;
}
