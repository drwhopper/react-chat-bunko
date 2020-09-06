import React from 'react';

class ChatInput extends React.Component {

  sendMessage(name: string, msg: string) {

  }

  render() {
    return (
      <div>
        <input type="text" name="name" />
        <input type="text" name="msg" />
        <input type="submit" value="Send" />
      </div>
    )
  }
}

export default ChatInput;