import React from "react";
import { Link } from 'react-router-dom';

class Socials extends React.Component {
  render() {
    return (
      <div className="socials">
        <ul>
          <li>
            <Link to="/" >
              <i className="fa fa-facebook" />
            </Link>
          </li>
          <li>
            <Link to="/" >
              <i className="fa fa-twitter" />
            </Link>
          </li>
          <li>
            <Link to="/" >
              <i className="fa fa-instagram" />
            </Link>
          </li>
          <li>
            <Link to="/" >
              <i className="fa fa-pinterest-p" />
            </Link>
          </li>
          <li>
            <Link to="/" >
              <i className="fa fa-google-plus" />
            </Link>
          </li>
        </ul>
        <select
          name="field-type-currency"
          id="field-type-currency"
          className="select-small"
        >
          <option value>€ EUR</option>
          <option value>€ EUR</option>
          <option value>€ EUR</option>
          <option value>€ EUR</option>
        </select>
      </div>
    );
  }
}

export default Socials;
