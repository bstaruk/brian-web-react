require('./scss/passgen.scss');

import React from 'react';

class PassGenComponent extends React.Component {
  render() {
    return (
      <div className="passgen">
        <p>Hi mom!</p>
      </div>
    );
  }
}

PassGenComponent.propTypes = {};

PassGenComponent.defaultProps = {};

export default PassGenComponent;
