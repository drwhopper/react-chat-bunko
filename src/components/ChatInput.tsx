import React from 'react';

// import {MessageType} from "types/message";

interface ChatInputProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface ChatInputState {
  value: string;
}

class ChatInput extends React.Component<ChatInputProps, ChatInputState> {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;

  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  constructor(props: ChatInputProps) {
    super(props);
    this.onClick = props.onClick;
    this.onTextChange = props.onTextChange;
  }

  render(): React.ReactNode {
    return (
      <div>
        <input type="text" name="name" onChange={(e) => this.onTextChange(e)} />
        <input type="text" name="msg" onChange={(e) => this.onTextChange(e)} />
        <input type="submit" value="Send" onClick={(e) => this.onClick(e)} />
      </div>
    );
  }
}

export default ChatInput;
