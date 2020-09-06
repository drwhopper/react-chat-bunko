import React from 'react';

type MessageType = {
  user: string,
  text: string
}

type Messages = {
  msgs: MessageType[]
} 

const MessageItem: React.FC<MessageType> = (props) => (
  <div>
    <span>{props.user}：</span>
    <div>「{props.text}」</div>
  </div>
)

const MessageArea: React.FC<Messages> = (props) => (
  <div>
    {props.msgs.map((m) => {
      return <MessageItem user={m.user} text={m.text} />
      })}
  </div>
)

export default MessageArea;
