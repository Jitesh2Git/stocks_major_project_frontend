import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";

export interface MenuProps {
  user: User | null;
  handleSignOut: () => Promise<void>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ArticleType {
  article_title: string;
  article_url: string;
  article_photo_url?: string;
  source: string;
  post_time_utc: string;
}
