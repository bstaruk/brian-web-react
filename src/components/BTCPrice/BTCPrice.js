require('./scss/btcprice.scss');

import React from 'react';
import BTCPriceStore from '../../stores/BTCPriceStore';
import BTCPriceActions from '../../actions/BTCPriceActions';

class BTCPriceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0.00,
      priceError: false,
      priceSource: ''
    };
    this._getPrice = this._getPrice.bind(this);
    this._handleSourceChange = this._handleSourceChange.bind(this);
  }

  componentDidMount() {
    this._getPrice(BTCPriceStore.getSourceRecord('id', 'coinbase'));
  }

  _getPrice(source) {
    BTCPriceActions.getPrice(source.api, source.id)
      .then(
        (data) => {
          if (data === 0) {
            this.setState({
              price: 0.00,
              priceError: true,
              priceSource: ''
            });
          } else {
            this.setState({
              price: data,
              priceSource: source
            });
          }
        }
      );
  }

  _handleSourceChange(source) {
    this._getPrice(source);
  }

  render() {
    return (
      <div className="btc-price">
        <p>
          ${this.state.price}
          {this.state.priceSource &&
          <span> via <a href={this.state.priceSource.url} target="_blank" className="alt icon-after external">{this.state.priceSource.label}</a></span>
          }
          {this.state.priceError === true &&
          <span><br />There was an error fetching the price!</span>
          }
        </p>
        <h3>Price Data Sources:</h3>
        <ul>
          {BTCPriceStore.getSourceData().map((source, index) =>
            <li key={index}>
              <button onClick={() => this._handleSourceChange(source)}>{source.label}</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

BTCPriceComponent.propTypes = {};

BTCPriceComponent.defaultProps = {};

export default BTCPriceComponent;
