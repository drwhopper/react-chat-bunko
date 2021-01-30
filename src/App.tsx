import React from 'react';

import 'App.css';
import MessageArea from 'components/MessageArea';
import ChatInput from 'components/ChatInput';

import { MessageType, Messages } from 'types/message';

// const m: MessageType[] = [{ user: 'whopper', text: 'わぱー' }];
interface CurrentData {
  msg: MessageType,
  msgs: Messages,
}

class App extends React.Component<{}, CurrentData> {
  constructor(props: any) {
    super(props);
    this.state = {
      msg: {
        user: '',
        text: '',
      },
      msgs: [{ user: 'whopper', text: 'わぱー' }],
    };
  }

  onTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.persist();
    if (e.target.id === 'name') {
      this.setState((prevState) => ({ msg: { user: e.target.value, text: prevState.msg.text } }));
    } else if (e.target.id === 'msg') {
      this.setState((prevState) => ({ msg: { user: prevState.msg.user, text: e.target.value } }));
    }
  };

  sendMessage = () => {
    const { msg, msgs } = this.state;
    this.setState({msgs: msgs.concat(msg)});
    this.setState((prevState) => ({ msg: { user: prevState.msg.user, text: '' } }));
  }

  render() {
    const { msg, msgs } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            へっだ
          </p>
        </header>
        <div>
          <p>本文</p>
          <MessageArea msgs={msgs} />
        </div>
        <ChatInput
          user = {msg.user}
          text = {msg.text}
          send={() => this.sendMessage()}
          onTextChange={(e) => this.onTextChange(e)}
        />
      </div>
    );
  }
}

export default App;
