import React from "react";

class ChatBody extends React.Component {
  render() {
    return (
      <div className="chat__body mCustomScrollbar">
        <div className="chat__message">
          <p className="chat__message-title">Gronelco</p>

          <span className="chat__message-meta">3:25 AM</span>
          <div className="chat__message-entry">
            <p>Oh you dirty gamblers</p>
          </div>

        </div>

        <div className="chat__message">
          <p className="chat__message-title">Visconti</p>

          <span className="chat__message-meta">3:25 AM</span>
          <div className="chat__message-entry">
            <p>How are things</p>
          </div>

        </div>

      </div>
    );
  }
}

export default ChatBody;
