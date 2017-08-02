import React from "react";
import FooterNav from "./footer_nav";
import FooterMessage from "./footer_message";
import FooterInner from "./footer_inner";
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="shell">
          <Link to="/" className="footer__logo">
            <i className="ico-footer-logo">Byte Joker</i>
          </Link>

          <FooterNav />

          <FooterMessage />

          <FooterInner />

        </div>
      </footer>
    );
  }
}

export default Footer;
