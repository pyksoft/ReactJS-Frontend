import React from "react";

class SectionContentActions extends React.Component {
  render() {
    return (
      <div className="section__content-actions">
        <a
          href="#section-simple"
          className="btn btn--ico js-btn-expand section__btn"
          id="js-section-btn"
        >
          <i className="ico-question" />
          <span>HOW TO PLAY THO?</span>
        </a>
      </div>
    );
  }
}

export default SectionContentActions;
