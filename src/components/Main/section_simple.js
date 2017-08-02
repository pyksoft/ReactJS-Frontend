import React from "react";
import SectionVideo from "./section_video";
import SectionActions from "./section_actions";

class SectionSimple extends React.Component {
  render() {
    return (
      <section className="section-simple" id="section-simple">
        <div className="section__body">
          <SectionVideo />

          <div className="section__content">
            <h2 className="section__title">HOW TO PLAY</h2>

            <h5 className="section__subtitle">
              In his comic book appearances, the Joker is portrayed as a
              criminal mastermind ashtray.
            </h5>

            <div className="cols">
              <div className="col col--1of2">
                <p>
                  Introduced as a psychopath with a warped, sadistic sense of
                  humor, the character became a goofy prankster in the late
                  1950s in response to regulation by the Comics Code
                  AuthorityIntroduced as a psychopath with a warped, sadistic
                  sense of humor, the character became a goofy prankster in the
                  late 1950s in response to regulation by the Comics Code
                  Authority
                </p>
              </div>

              <div className="col col--1of2">
                <p>
                  Introduced as a psychopath with a warped, sadistic sense of
                  humor, the character became a goofy prankster in the late
                  1950s in response to regulation by the Comics Code
                  AuthorityIntroduced as a psychopath with a warped, sadistic
                  sense of humor, the character became a goofy prankster.
                </p>
              </div>

            </div>

          </div>

        </div>

        <SectionActions />

      </section>
    );
  }
}

export default SectionSimple;
