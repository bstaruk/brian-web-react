require('./header.scss');

import React from 'react';
import {Link} from 'react-router'

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: false
    };
  }

  handleNavToggle() {
    this.setState({
      navActive: !this.state.navActive
    });
  }

  render() {
    const siteTitle = 'brian.staruk.me';
    const navLinks = [
      {
        'anchor': 'Home',
        'title': 'Home',
        'route': '/'
      },
      {
        'anchor': 'Contact',
        'title': 'Contact',
        'route': '/contact'
      }
    ];
    return (
      <div id="header">
        <h1>{siteTitle}</h1>
        <div className="nav-toggle" onClick={this.handleNavToggle.bind(this)}>{this.state.navActive ? 'Close' : 'Open'} Menu</div>
        <div className="nav-wrapper">
          <ul role="nav" className={this.state.navActive ? 'nav nav-active' : 'nav'}>
            {navLinks.map(function (link, index) {
              return (
                <li key={index}>
                  <Link to={link.route} title={link.title} activeClassName="active">{link.anchor}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

HeaderComponent.defaultProps = {};

export default HeaderComponent;
