import React from 'react';

class BTCPriceCurrenciesComponent extends React.Component {
  render() {
    return (
      <div className="btc-price--currencies">
        <ul>
          {this.props.currencyData.map((currency, index) =>
            <li key={index}>
              <button
                onClick={() => this.props.handleCurrencyChange(currency.id)}
                className={this.props.activeCurrency == currency.id ? 'active' : null}>
                {currency.id} ({currency.symbol})
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

BTCPriceCurrenciesComponent.propTypes = {
  activeCurrency: React.PropTypes.string,
  handleCurrencyChange: React.PropTypes.func.isRequired,
  currencyData: React.PropTypes.array.isRequired
};

BTCPriceCurrenciesComponent.defaultProps = {};

export default BTCPriceCurrenciesComponent;
