require('./scss/header.scss');

import React from 'react';
import {Link, IndexLink} from 'react-router';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: this.props.navActive
    };
    this._handleNavToggle = this._handleNavToggle.bind(this);
    this._handleNavClose = this._handleNavClose.bind(this);
  }

  _handleNavToggle() {
    this.setState({
      navActive: !this.state.navActive
    });
  }

  _handleNavClose() {
    this.setState({
      navActive: false
    });
  }

  render() {
    const siteTitle = 'brian.staruk.me';
    const navLinks = [
      {
        'anchor': 'Home',
        'index': true,
        'attr': {
          'title': 'Home',
          'to': '/',
          'activeClassName': 'active'
        }
      },
      {
        'anchor': 'Contact',
        'attr': {
          'title': 'Contact',
          'to': '/contact',
          'activeClassName': 'active'
        }
      }
    ];
    return (
      <div id="header">
        <h1><IndexLink to="/" title={siteTitle} onClick={this._handleNavClose}>{siteTitle}</IndexLink></h1>
        <div onClick={this._handleNavToggle} className="nav-toggle">
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
            {navLinks.map((link, index) =>
              <li key={index}>
                {
                  link.index ?
                    <IndexLink onClick={this._handleNavClose} {...link.attr}>{link.anchor}</IndexLink>
                    :
                    <Link onClick={this._handleNavClose} {...link.attr}>{link.anchor}</Link>
                }
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  navActive: React.PropTypes.bool
};

HeaderComponent.defaultProps = {
  navActive: false
};

export default HeaderComponent;
