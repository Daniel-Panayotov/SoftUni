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

interface userId {
  created_at: string;
  email: string;
  password: string;
  posts: string[];
  tel: string;
  themes: string[];
  updatedAt: string;
  username: string;
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
