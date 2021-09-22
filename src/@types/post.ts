export type Comment = {
  image: string;
  _id: string;
  text: string;
  createdAt: Date;
  username: string;
  user: string;
};

export type Post = {
  likes: any[];
  agrees: any[];
  deserves: any[];
  approved: boolean;
  approvalPending: boolean;
  _id: string;
  user: { _id: string; image: string; username: string };
  text: string;
  comments: Comment[];
  createdAt: Date;
  __v: number;
} | null;
