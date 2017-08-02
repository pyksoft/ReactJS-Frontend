import React from "react";
import Socials from "./socials";

class FooterInner extends React.Component {
  render() {
    return (
      <div className="footer__inner">
        <p className="copyright">
          © 2017 Bitjoker Limited. All rights reserved.{" "}
        </p>

        <Socials />

      </div>
    );
  }
}

export default FooterInner;
