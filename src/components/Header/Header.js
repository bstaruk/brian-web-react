require('./header.scss');

import React from 'react';
import {Link, IndexLink} from 'react-router'

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: false
    };
  }

  handleToggleNav() {
    this.setState({
      navActive: !this.state.navActive
    });
  }

  render() {
    return (
      <div id="header">
        <h1>brian.staruk.me</h1>
        {this.state.date}
        <div className="nav-toggle" onClick={this.handleToggleNav.bind(this)}>Toggle Nav</div>
        <ul id="nav" role="nav" className={this.state.navActive ? 'nav-active' : ''}>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
      </div>
    );
  }
}

HeaderComponent.defaultProps = {};

export default HeaderComponent;
