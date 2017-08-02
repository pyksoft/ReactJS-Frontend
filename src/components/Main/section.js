import React from "react";
import SectionHead from "./section_head";
import Timer from "./timer";
import Counter from "./counter";
import Chat from "./chat";
import SectionContentActions from "./section_content_actions";

class SectionFirstWidget extends React.Component{
  render() {
    return (
      <div className="table__row">
        <div className="table__cell">2os8i4e</div>

        <div className="table__cell table__cell--light">
          €3,469.21
        </div>

        <div className="table__cell table__cell--yellow">
          €3,469.21
        </div>

      </div>
    );
  }
}

class Section extends React.Component {
  render() {
    return (
      <section className="section">

        <SectionHead />

        <div className="section__body">
          <aside className="section__aside hidden-xs">
            <ul className="widgets">
              <li className="widget widget--statistic">
                <div className="statistic-info">
                  <div className="statistic-info__cell">
                    <span>GAMES PLAYED</span>
                    73’000’433
                  </div>
                  <div className="statistic-info__cell statistic-info__cell--alt">
                    <span>WAGERED (EUR)</span>
                    350’433
                  </div>
                </div>
                <div className="table">
                  <div className="table__head">
                    <div className="table__row">

                      <div className="table__cell">PLAYER</div>

                      <div className="table__cell">BET</div>

                      <div className="table__cell">PROFIT</div>

                    </div>

                  </div>

                  <div className="table__body">
                    <SectionFirstWidget />
                    <SectionFirstWidget />
                    <SectionFirstWidget />
                    <SectionFirstWidget />
                    <SectionFirstWidget />
                  </div>

                </div>

              </li>

              <li className="widget widget--rank-list">
                <h2 className="widget__title">HALL OF FAME</h2>

                <select
                  name="rank-list-select"
                  id="rank-list-select"
                  className="widget__select"
                >
                  <option value="Daily" selected>
                    Daily
                  </option>
                  <option value="Daily">Daily</option>
                  <option value="Daily">Daily</option>
                  <option value="Daily">Daily</option>
                </select>
                <div className="table table--alt">
                  <div className="table__head">
                    <div className="table__row">
                      <div className="table__cell">RANK</div>

                      <div className="table__cell">Player</div>

                      <div className="table__cell">WAGERED</div>

                    </div>

                  </div>

                  <div className="table__body">
                    <div className="table__row">
                      <div className="table__cell">
                        <i className="ico-ribbon-light">
                          <span>1</span>
                        </i>
                      </div>

                      <div className="table__cell">7843iuf</div>

                      <div className="table__cell table__cell--yellow">
                        €3,469.21
                      </div>

                    </div>

                    <div className="table__row">
                      <div className="table__cell">
                        <i className="ico-ribbon-light">
                          <span>2</span>
                        </i>
                      </div>

                      <div className="table__cell">7843iuf</div>

                      <div className="table__cell table__cell--yellow">
                        €3,469.21
                      </div>

                    </div>

                    <div className="table__row">
                      <div className="table__cell">
                        <i className="ico-ribbon-light">
                          <span>3</span>
                        </i>
                      </div>

                      <div className="table__cell">7843iuf</div>

                      <div className="table__cell table__cell--yellow">
                        €3,469.21
                      </div>

                    </div>

                    <div className="table__row">
                      <div className="table__cell">
                        <i className="ico-ribbon">
                          <span>4</span>
                        </i>
                      </div>

                      <div className="table__cell">7843iuf</div>

                      <div className="table__cell table__cell--yellow">
                        €3,469.21
                      </div>

                    </div>

                    <div className="table__row">
                      <div className="table__cell">
                        <i className="ico-ribbon">
                          <span>5</span>
                        </i>
                      </div>

                      <div className="table__cell">7843iuf</div>

                      <div className="table__cell table__cell--yellow">
                        €3,469.21
                      </div>

                    </div>

                  </div>

                </div>

              </li>

            </ul>

          </aside>

          <div className="section__content">
            <Timer />

            <Counter />

            <SectionContentActions />

          </div>

          <aside className="section__aside section__aside--large hidden-xs">
            <ul className="widgets">
              <li className="widget widget--chat">

                <Chat />

              </li>

            </ul>

          </aside>

        </div>

      </section>
    );
  }
}

export default Section;
