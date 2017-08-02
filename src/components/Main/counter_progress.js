import React from "react";

class CounterProgress extends React.Component {
  render() {
    return (
      <div className="counter__progress">
        <div
          className="counter__progress-current"
          style={{
            width: "87.3%"
          }}
        />
      </div>
    );
  }
}

export default CounterProgress;
