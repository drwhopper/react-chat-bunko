import React from "react";

import "App.css";
import MessageArea from "components/MessageArea";
import ChatInput from "components/ChatInput";

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
        <MessageArea user="whopper" text="わぱー" />
      </div>
      <ChatInput />
    </div>
  );
}

export default App;
