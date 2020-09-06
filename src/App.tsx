import React from 'react';

import 'App.css';
import MessageArea from 'components/MessageArea';
import ChatInput from 'components/ChatInput';

import { MessageType } from 'types/message';

const m: MessageType[] = [{ user: 'whopper', text: 'わぱー' }];

class App extends React.Component<unknown, MessageType> {
  onTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.name === 'name') {
      this.setState({ user: e.target.value });
    } else if (e.target.name === 'msg') {
      this.setState({ text: e.target.value });
    }
  };

  handleClick: React.MouseEventHandler<HTMLInputElement> = () => {
    const { user, text } = this.state;
    console.log(user);
    console.log(text);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            へっだ
          </p>
        </header>
        <div>
          <p>本文</p>
          <MessageArea msgs={m} />
        </div>
        <ChatInput
          onClick={(e) => this.handleClick(e)}
          onTextChange={(e) => this.onTextChange(e)}
        />
      </div>
    );
  }
}

export default App;
