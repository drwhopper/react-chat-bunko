export type MessageType = {
  timestamp?: number;
  user: string,
  text: string
}

export type Messages = MessageType[]
