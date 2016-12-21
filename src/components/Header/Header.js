require('normalize.css/normalize.css');
require('./header.scss');

import React from 'react';
import { Link } from 'react-router'

class HeaderComponent extends React.Component {
  render() {
    return (
      <div id="header">
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
}

HeaderComponent.defaultProps = {
};

export default HeaderComponent;
