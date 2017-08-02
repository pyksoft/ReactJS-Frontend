import React from "react";
import { Link } from 'react-router-dom';

class Options extends React.Component {
  render() {
    return (
      <div className="options">
        <Link to="/" className="option option--left">
          1 <span>HOUR</span>
        </Link>
        <Link to="/" className="option option--center current">
          1 <span>MINUTE</span>
        </Link>
        <Link to="/" className="option option--right">
          24 <span>HOURS</span>
        </Link>
      </div>
    );
  }
}

export default Options;
