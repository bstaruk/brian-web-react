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

  toggleNav() {
    this.setState({
      navActive: !this.state.navActive
    });
  }

  render() {
    return (
      <div id="header">
        <h1>brian.staruk.me</h1>
        {this.state.date}
        <div className="nav-toggle" onClick={this.toggleNav.bind(this)}>{this.state.navActive ? 'Close' : 'Open'} Menu</div>
        <div className="nav-wrapper">
          <ul role="nav" className={this.state.navActive ? 'nav nav-active' : 'nav'}>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

HeaderComponent.defaultProps = {};

export default HeaderComponent;
