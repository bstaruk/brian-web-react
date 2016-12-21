require('normalize.css/normalize.css');
require('./footer.scss');

import React from 'react';

let githubImage = require('../../assets/images/github.png');

class FooterComponent extends React.Component {
  render() {
    return (
      <div id="footer">
        <p><img src={githubImage} alt="Everyone loves GitHub!" /></p>
      </div>
    );
  }
}

FooterComponent.defaultProps = {
};

export default FooterComponent;
