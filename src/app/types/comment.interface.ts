import { UserInterface } from "./user.interface";

export interface CommentInterface {
  id: string;
  user: UserInterface;
  comment: string;
  timestamp: string;
}
