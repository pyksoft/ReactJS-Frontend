import React from "react";
import HeaderInner from "./header_inner";
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="shell">
          <Link to="/" className="btn-menu js-btn-mobile-menu visible-xs-block">
            <span />
            <span />
            <span />
          </Link>

          <Link to="/" className="logo hidden-xs">
            <i className="ico-logo" />
            <span>
              <i className="ico-byte">Byte</i>
              <i className="ico-joker">Joker</i>
            </span>
          </Link>

          <HeaderInner />

        </div>
      </header>
    );
  }
}

export default Header;
