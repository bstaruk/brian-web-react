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
        <div onClick={this.handleNavToggle.bind(this)} className="nav-toggle">
          {this.state.navActive ? 'Close' : 'Open'} Menu
          <div className="nav-toggle-icon">
            <div className={this.state.navActive ? 'icon-wrapper icon-open' : 'icon-wrapper'}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
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
