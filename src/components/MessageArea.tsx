import React from 'react';

import { MessageType, Messages } from 'types/message';

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

const MessageArea: React.FC<Messages> = ({ msgs }: Messages) => (
  <div>
    {msgs.map((m) => <MessageItem user={m.user} text={m.text} />)}
  </div>
);

export default MessageArea;
