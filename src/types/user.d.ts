export type User = {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  walletAddress: string;
  ownedTarget: Target[];
};

export type Target = {
  targetId: string;
  name: string;
  description: string;
  mainImage: string;
  category: string;
  images: string[];
  details?: TargetDetail;
  postedBy: string;
};

export type TargetDetail = {
  website?: string;
  url?: string;
  address?: string;
};
