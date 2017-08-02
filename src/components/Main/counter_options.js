import React from "react";
import { Link } from 'react-router-dom';

class Counteroption extends React.Component{
  render(){
    return (
      <Link to="/" className="js-btn-rotate">
        <i className="ico-coin-joker" />
        <i className="ico-bit-coin" />
      </Link>
    );
  }
}

class CounterOptions extends React.Component {
  render() {
    return (
      <div className="counter__options">
        <Counteroption />
        <Counteroption />
        <Counteroption />
      </div>
    );
  }
}

export default CounterOptions;
