import React from "react";
import CounterInner from "./counter_inner";

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <CounterInner />        
      </div>
    );
  }
}

export default Counter;
