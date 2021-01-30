import React from 'react';

import {MessageType} from 'types/message';

interface ChatInputProps {
  send: () => void;
  onTextChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface ChatInputState extends MessageType, ChatInputProps{};

class ChatInput extends React.Component<ChatInputState> {

  onEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      this.props.send();
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <input type="text" id="name" onChange={(e) => this.props.onTextChange(e)} value={this.props.user} />
        <input type="text" id="msg"
          onChange={(e) => this.props.onTextChange(e)}
          onKeyPress={(e) => this.onEnter(e)}
          value={this.props.text} />
        <input type="submit" value="Send" onClick={this.props.send} />
      </div>
    );
  }
}

export default ChatInput;
