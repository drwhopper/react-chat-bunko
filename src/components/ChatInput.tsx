import React from 'react';

// import {MessageType} from "types/message";

class ChatInput extends React.Component {
  static sendMessage(): string {
    return '';
  }

  render(): React.ReactNode {
    return (
      <div>
        <input type="text" name="name" />
        <input type="text" name="msg" />
        <input type="submit" value="Send" />
      </div>
    );
  }
}

export default ChatInput;
