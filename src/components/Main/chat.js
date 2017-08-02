import React from "react";
import ChatHead from "./chat_head";
import ChatBody from "./chat_body";
import ChatActions from "./chat_actions";

class Chat extends React.Component {
  render() {
    return (
      <div className="chat">

        <ChatHead />

        <ChatBody />

        <ChatActions />
        
      </div>
    );
  }
}

export default Chat;
