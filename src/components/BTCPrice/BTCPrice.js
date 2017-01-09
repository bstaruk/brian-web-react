require('./scss/btcprice.scss');

import React from 'react';
import BTCPriceStore from '../../stores/BTCPriceStore';
import BTCPriceActions from '../../actions/BTCPriceActions';
import BTCPriceSources from './BTCPriceSources';
import BTCPriceCurrencies from './BTCPriceCurrencies';

class BTCPriceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'USD',
      price: 0,
      priceError: false,
      priceSource: ''
    };
    this._getPrice = this._getPrice.bind(this);
    this._handleSourceChange = this._handleSourceChange.bind(this);
    this._handleCurrencyChange = this._handleCurrencyChange.bind(this);
  }

  componentDidMount() {
    this._getPrice(BTCPriceStore.getSourceRecord('id', 'coinbase'), this.state.currency);
  }

  _getPrice(source, currency) {
    BTCPriceActions.getPrice(
      source.api['ALL'] ? source.api['ALL'] : source.api[currency], source.id, currency
    )
    .then(
      (data) => {
        if (data === 0) {
          this.setState({
            currency: currency,
            price: 0,
            priceError: true,
            priceSource: ''
          });
        } else {
          this.setState({
            currency: currency,
            price: data,
            priceSource: source
          });
        }
      }
    );
  }

  _handleSourceChange(source) {
    this._getPrice(source, this.state.currency);
  }

  _handleCurrencyChange(currency) {
    this._getPrice(this.state.priceSource, currency);
  }

  render() {
    const currency = BTCPriceStore.getCurrencyRecord('id', this.state.currency);
    return (
      <div className="btc-price">
        <p>
          The current price of Bitcoin is {currency ? currency.symbol : null}{this.state.price.toFixed(2)}
          {this.state.priceSource &&
          <span> via <a href={this.state.priceSource.url} target="_blank" className="alt icon-after external">{this.state.priceSource.label}</a></span>
          }.
          {this.state.priceError === true &&
          <span><br />There was an error fetching the price!</span>
          }
        </p>
        <h3>Price Data Sources:</h3>
        <BTCPriceSources sourceData={BTCPriceStore.getSourceData()} handleSourceChange={this._handleSourceChange} />
        <h3>Currencies:</h3>
        <BTCPriceCurrencies currencyData={BTCPriceStore.getCurrencies()} handleCurrencyChange={this._handleCurrencyChange} />
      </div>
    );
  }
}

BTCPriceComponent.propTypes = {};

BTCPriceComponent.defaultProps = {};

export default BTCPriceComponent;
