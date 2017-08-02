import React from "react";

class Timer extends React.Component {
  render() {
    return (
      <div className="timer">
        <div className="timer__aside">
          <i className="ico-star" />
          <small>POT</small>
          <span>73’000 </span>
        </div>

        <div className="timer__widget">
          <i className="ico-hat hidden-xs" />
          <i className="ico-hat-mobile visible-xs-block" />
          <div className="timer__widget-inner">
            <span>0:03</span>
          </div>

          <div className="timer__widget-ico">
            <i className="ico-clock" />
          </div>

        </div>

        <div className="timer__aside timer__aside--alt">
          <i className="ico-star-alt" />
          <small>PLAYERS</small>
          <span>366</span>
        </div>

      </div>
    );
  }
}

export default Timer;
