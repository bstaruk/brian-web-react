require('./scss/passgen.scss');

import React from 'react';

class PassGenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 15,
      password: '',
      similar: true,
      symbols: false
    };
    this._makeNewPassword = this._makeNewPassword.bind(this);
    this._handleLengthChange = this._handleLengthChange.bind(this);
    this._handleSymbolsChange = this._handleSymbolsChange.bind(this);
    this._handleSimilarChange = this._handleSimilarChange.bind(this);
  }

  componentDidMount() {
    this._makeNewPassword();
  }

  _makeNewPassword() {
    const length = this.state.length,
      symbols = this.state.symbols,
      similar = this.state.similar,
      charset1 = 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      charset2 = 'abcdefghjknpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789',
      charset3 = '!@#$%^&*()-=_+\'';

    let retVal = '';

    // start with similar characters?
    let charset = similar ? charset1 : charset2;

    // add symbols?
    if (symbols) {
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

  _handleLengthChange(length) {
    this.setState({
      length: length
    });
  }

  _handleSymbolsChange(symbols) {
    this.setState({
      symbols: symbols == 'true'
    });
  }

  _handleSimilarChange(similar) {
    this.setState({
      similar: similar == 'true'
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
              <select
                onChange={(e) => this._handleSymbolsChange(e.target.value)}
                defaultValue={this.state.symbols}
              >
                <option value={true}>Yes Symbols</option>
                <option value={false}>No Symbols</option>
              </select>
            </p>
            <p className="row">
              <select
                onChange={(e) => this._handleSimilarChange(e.target.value)}
                defaultValue={this.state.similar}
              >
                <option value={true}>Yes Similar</option>
                <option value={false}>No Similar</option>
              </select>
            </p>
            <p className="row">
              <select
                onChange={(e) => this._handleLengthChange(parseInt(e.target.value))}
                defaultValue={this.state.length}
              >
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </p>
            <p className="row">
              <button onClick={this._makeNewPassword} type="button">Generate Fresh Password</button>
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
