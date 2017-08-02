import React from "react";
import Options from "./options";

class SectionHead extends React.Component {
  render() {
    return (
      <header className="section__head">
        <h5 className="section__title">choose your game mode</h5>

        <Options />

      </header>
    );
  }
}

export default SectionHead;
