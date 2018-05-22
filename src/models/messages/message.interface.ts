import  { UserInterface } from "../users/user.interface";

export interface MessageInterface {
  user: UserInterface;
  date: Date
  lastMessage: string;
}
