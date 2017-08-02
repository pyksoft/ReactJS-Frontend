import React from "react";
import Section from "./section";
import SectionSimple from "./section_simple";
import SectionTickets from "./section_tickets";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <div className="shell">

          <Section />

          <SectionSimple />

          <SectionTickets />

        </div>
      </main>
    );
  }
}

export default Main;
