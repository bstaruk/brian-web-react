require('./footer.scss');

import React from 'react';

class FooterComponent extends React.Component {
  render() {
    const socialLinks = [
      {
        'title': 'GitHub',
        'url': 'https://github.com/bstaruk/brian-web-react',
        'icon': 'github'
      },
      {
        'title': 'LinkedIn',
        'url': 'https://www.linkedin.com/in/brian-staruk',
        'icon': 'linkedin'
      },
      {
        'title': 'Email',
        'url': 'mailto:bstaruk@gmail.com',
        'icon': 'envelope'
      }
    ];
    return (
      <div id="footer">
        <ul className="social">
          {socialLinks.map(function (link, index) {
            return (
              <li key={index}>
                <a href={link.url} title={link.title} className="icon" target="_blank">
                  <i className={'fa fa-' + link.icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

FooterComponent.defaultProps = {};

export default FooterComponent;
