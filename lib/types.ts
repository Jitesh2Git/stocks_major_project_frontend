import { User } from "firebase/auth";

export interface MenuProps {
  user: User | null;
  handleSignOut: () => Promise<void>;
}
