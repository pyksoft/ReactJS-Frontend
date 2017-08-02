import React from "react";
import { Link } from 'react-router-dom';

const pages = [{
  pagename: 'ABOUT'
  },{
  pagename: 'AFFILIATE'
  },{
  pagename: 'STATISTICS'
  },{
  pagename: 'SUPPORT'
}];

class FooterPage extends React.Component{
  render() {
    return (
      <li>
        <Link to="/" >{this.props.page}</Link>
      </li>
    );
  }
}

class FooterNav extends React.Component {
  render() {
    return (
      <nav className="footer__nav">
        <ul>
          {pages.map((page, i) =>
            <FooterPage key={i} page={page.pagename} />
          )}
        </ul>
      </nav>
    );
  }
}

export default FooterNav;
