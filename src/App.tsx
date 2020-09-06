import React from "react";

import "App.css";
import MessageArea from "components/MessageArea";
import ChatInput from "components/ChatInput";

type MessageType = {
  user: string,
  text: string
}

const m: MessageType[] = [{user: "whopper", text:"わぱー"}];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          へっだ
        </p>
      </header>
      <div>
        <p>本文</p>
        <MessageArea msgs={m}/>
      </div>
      <ChatInput />
    </div>
  );
}

export default App;
