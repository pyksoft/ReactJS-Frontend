import React from "react";
import { Link } from 'react-router-dom';

class SectionVideo extends React.Component {
  render() {
    return (
      <div className="section__video">
        <div className="video" data-video="Xfhhns9vHes">
          <Link to="/" className="video__btn-play">
            <i className="ico-play" />
          </Link>
        </div>
      </div>
    );
  }
}

export default SectionVideo;
