import React from "react";
import { Link } from 'react-router-dom';

class HeaderInner extends React.Component {
  render() {
    return (
      <div className="header__inner">
        <p>
          Welcome, <Link to="/">n2os8i4e</Link>
        </p>
        <nav className="nav-access">
          <ul>
            <li className="active">
              <Link to="/">
                <i className="ico-perf" />
              </Link>
              <div className="nav-access__dropdown">
                <div className="nav-access__aside">
                  <small>BALANCE</small>
                  <span>95 COINS</span>
                </div>
                <div className="nav-access__actions">
                  <Link to="/" className="btn btn--blue btn--small btn--block">
                    DEPOSIT
                  </Link>
                  <Link to="/" className="btn btn--block">
                    WITHDRAW
                  </Link>
                  <Link to="/" className="btn btn--block">
                    FAUCET
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HeaderInner;
