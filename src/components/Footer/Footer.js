require('./footer.scss');

import React from 'react';

class FooterComponent extends React.Component {
  render() {
    return (
      <div id="footer">
        <ul className="social">
          <li><a href="https://github.com/bstaruk/" title="GitHub" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href="https://www.linkedin.com/in/brian-staruk" title="LinkedIn" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="mailto:bstaruk@gmail.com" title="Email" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    );
  }
}

FooterComponent.defaultProps = {};

export default FooterComponent;
