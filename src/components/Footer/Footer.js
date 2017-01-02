require('./scss/footer.scss');

import React from 'react';

class FooterComponent extends React.Component {
  render() {
    const socialLinks = [
      {
        'title': 'View my GitHub profile',
        'url': 'https://github.com/bstaruk/brian-web-react',
        'icon': 'github'
      },
      {
        'title': 'Find me on LinkedIn',
        'url': 'https://www.linkedin.com/in/brian-staruk',
        'icon': 'linkedin'
      },
      {
        'title': 'Email me',
        'url': 'mailto:brian@staruk.me',
        'icon': 'envelope'
      }
    ];
    return (
      <div id="footer">
        <ul className="social">
          {socialLinks.map((link, index) =>
            <li key={index}>
              <a href={link.url} title={link.title} target="_blank">
                <i className={'fa fa-' + link.icon} aria-hidden={true} />
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

FooterComponent.defaultProps = {};

export default FooterComponent;
