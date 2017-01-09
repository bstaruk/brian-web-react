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
    const length = 15,
      symbols = true,
      similar = true,
      charset1 = 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      charset2 = 'abcdefghjknpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789',
      charset3 = '!@#$%^&*()-=_+\'';

    let retVal = '';

    // start with similar characters?
    let charset = !similar ? charset1 : charset2;

    // add symbols?
    if (symbols === true) {
      charset = charset.concat(charset3);
    }

    // use the character set and length defined above to generate a random string
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    this.setState({
      password: retVal
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
