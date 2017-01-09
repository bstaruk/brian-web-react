require('./scss/passgen.scss');

import React from 'react';

class PassGenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '111111111111111'
    };
    this._makeNewPassword = this._makeNewPassword.bind(this);
  }

  _makeNewPassword() {
    this.setState({
      password: '222222222222222'
    });
  }

  render() {
    return (
      <div className="passgen">
        <p>Hi mom!</p>
        <form className="passgen--form">
          <fieldset>
            <p className="row">
              <input type="text" name="password" value={this.state.password} readOnly={true} />
            </p>
            <p className="row">
              <button onClick={this._makeNewPassword} type="button">Click</button>
            </p>
          </fieldset>
        </form>
      </div>
    );
  }
}

PassGenComponent.propTypes = {};

PassGenComponent.defaultProps = {};

export default PassGenComponent;
