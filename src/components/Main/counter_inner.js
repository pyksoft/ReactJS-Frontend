import React from "react";
import CounterTitle from "./counter_title";
import CounterOptions from "./counter_options";
import CounterProgress from "./counter_progress";
import { Link } from 'react-router-dom';

class CounterInner extends React.Component {
  render() {
    return (
      <div className="counter__inner">
        <CounterTitle />
        <CounterOptions />
        <CounterProgress />
        <div className="counter__actions">
          <Link to="/" className="counter__btn">
            min
          </Link>
          <Link to="/" className="counter__btn counter__btn--circle">
            -
          </Link>
          <span className="counter__text">
            <small>ƀ</small> 73’000{" "}
          </span>
          <Link to="/" className="counter__btn counter__btn--circle">
            +
          </Link>
          <Link to="/" className="counter__btn">
            Max
          </Link>
        </div>
        <Link to="/" className="btn btn--blue btn--block counter__btn--block">
          Place Bet
        </Link>
        <div className="counter__actions-bottom">
          <a
            href="#section-tickets"
            data-hide-element="#js-section-btn"
            className="counter__btn-simple js-btn-expand"
          >
            <i className="ico-arrow-down" />
            <span>VERIFY FAIRNESS</span>
            <i className="ico-arrow-down" />
          </a>
        </div>
      </div>
    );
  }
}

export default CounterInner;
