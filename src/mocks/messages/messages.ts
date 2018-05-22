import { MessageInterface } from '../../models/messages/message.interface'
import { USER_LIST } from "../users/users";


var userList = USER_LIST;

const messageList: MessageInterface[] = []

userList.forEach((user) =>{
  messageList.push({user: user, date: new Date(), lastMessage: 'Hello'})
})

export const  MESSAGE_LIST = messageList;
