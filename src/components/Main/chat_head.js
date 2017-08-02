import React from "react";

class ChatHead extends React.Component {
  render() {
    return (
      <div className="chat__head">
        <h3 className="chat__title">LIVE CHAT</h3>        
        <span className="chat__counter">1’173</span>
      </div>
    );
  }
}

export default ChatHead;
