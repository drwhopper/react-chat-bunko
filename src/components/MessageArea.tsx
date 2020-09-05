import React from 'react';

type MessageType = {
  user: string,
  text: string
}

export default function MessageArea(props: MessageType) {
    return(
      <div>
        <span>{props.user}：</span>
        <div>「{props.text}」</div>
      </div>
    )
}
