import React from 'react';

import { MessageType, Messages } from 'types/message';

interface MessageProp {
  msgs: Messages,
}

const MessageItem: React.FC<MessageType> = ({ user, text }: MessageType) => (
  <div>
    <span>{user}</span>
    <div>
      「
      {text}
      」
    </div>
  </div>
);

const MessageArea: React.FC<MessageProp> = ( {msgs} : MessageProp) => (
  <div>
    {msgs.map((m) => <MessageItem user={m.user} text={m.text} />)}
  </div>
);

export default MessageArea;
