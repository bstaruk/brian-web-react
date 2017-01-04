require('./scss/footer.scss');

import React from 'react';

class FooterComponent extends React.Component {
  render() {
    return (
      <div id="footer">
        <p>no ©. just ♥. <a href="https://github.com/bstaruk/brian-web-react" target="_blank" className="icon-after external">check me out!</a></p>
      </div>
    );
  }
}

FooterComponent.defaultProps = {};

export default FooterComponent;
