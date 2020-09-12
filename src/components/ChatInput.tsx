import React from 'react';

import {MessageType} from 'types/message';

interface ChatInputProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ChatInputState extends MessageType, ChatInputProps{};

class ChatInput extends React.Component<ChatInputState> {
  render(): React.ReactNode {
    return (
      <div>
        <input type="text" id="name" onChange={(e) => this.props.onTextChange(e)} value={this.props.user} />
        <input type="text" id="msg" onChange={(e) => this.props.onTextChange(e)} value={this.props.text}  />
        <input type="submit" value="Send" onClick={(e) => this.props.onClick(e)} />
      </div>
    );
  }
}

export default ChatInput;
