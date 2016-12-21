require('normalize.css/normalize.css');
require('../scss/App.scss');

import React from 'react';
import { Link } from 'react-router'

let yeomanImage = require('../images/yeoman.png');

class AboutComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">this is the about page</div>
      </div>
    );
  }
}

AboutComponent.defaultProps = {
};

export default AboutComponent;
