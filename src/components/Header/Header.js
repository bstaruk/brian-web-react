require('./header.scss');

import React from 'react';
import {Link, IndexLink} from 'react-router'

class HeaderComponent extends React.Component {
  render() {
    return (
      <div id="header">
        <h1>brian.staruk.me</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
      </div>
    );
  }
}

HeaderComponent.defaultProps = {};

export default HeaderComponent;
