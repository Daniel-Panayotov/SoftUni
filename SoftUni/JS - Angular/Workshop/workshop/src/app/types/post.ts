import { userId } from './userId';

interface themeId {
  created_at: string;
  posts: string[];
  subscribers: string[];
  themeName: string;
  updatedAt: string;
  userId: string;
  __v: number;
  _id: string;
}

export interface Post {
  created_at: string;
  likes: string[];
  text: string;
  themeId: themeId;
  updatedAt: string;
  userId: userId;
  __v: number;
  _id: string;
}
