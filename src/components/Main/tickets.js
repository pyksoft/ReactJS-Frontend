import React from "react";
import { Link } from 'react-router-dom';

class Tickets extends React.Component {
  render() {
    return (
      <div className="tickets">
        <div className="ticket">
          <h4 className="ticket__title">
            <span>PREVIOUS TICKET</span>
          </h4>
          <div className="ticket__row">
            <div className="ticket__item">
              <h6 className="ticket__subtitle">HASH</h6>
              <p className="ticket__meta">
                AAF7BC2E1D51B3B4E426977AEE45t35808103C049E5B82F449F62C1587ADCD88C
              </p>
            </div>
            <div className="ticket__item">
              <h6 className="ticket__subtitle">NUMBER</h6>
              <p className="ticket__meta">
                AAF7BC2E1D51B3B4E426977AEE4535808103C049E5B82F449F62C1587ADCD88C
              </p>
            </div>
          </div>
          <div className="ticket__row">
            <div className="ticket__item ticket__item--small">
              <h6 className="ticket__subtitle">SERVER SEED</h6>
              <p className="ticket__meta ticket__meta--alt">0000000011</p>
            </div>
            <div className="ticket__item ticket__item--small">
              <h6 className="ticket__subtitle">CLIENT SEED</h6>
              <p className="ticket__meta">0000000011</p>
            </div>
            <div className="ticket__item ticket__item--small">
              <h6 className="ticket__subtitle">RESULT</h6>
              <p className="ticket__meta ticket__meta--alt">0000000011</p>
            </div>
            <div className="ticket__item ticket__item--medium">
              <Link to="/" className="btn btn--green btn--block">
                VERIFY
              </Link>
            </div>
          </div>
        </div>
        <div className="ticket">
          <h4 className="ticket__title">
            <span>NEXT TICKET</span>
          </h4>
          <div className="ticket__row">
            <div className="ticket__item ticket__item--fluid">
              <h6 className="ticket__subtitle">HASH</h6>
              <p className="ticket__meta">
                AAF7BC2E1D51B3B4E426977AEE4535808103C049E5B82F449F62C1587ADCD88C
              </p>
            </div>
          </div>
          <div className="ticket__row">
            <div className="ticket__item ticket__item--fluid">
              <h6 className="ticket__subtitle">CLIENT SEED</h6>
              <p className="ticket__meta ticket__meta--alt">1121010210</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tickets;
