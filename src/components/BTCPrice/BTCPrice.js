require('./scss/btcprice.scss');

import React from 'react';
import BTCPriceStore from '../../stores/BTCPriceStore';

class BTCPriceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0.00,
      priceError: false,
      priceSource: ''
    };
    this._getPrice = this._getPrice.bind(this);
  }

  componentDidMount() {
    this._getPrice();
  }

  _getPrice() {
    fetch('https://api.coinbase.com/v2/prices/BTC-USD/buy').then(r => r.json())
      .then(
        data => {
          this.setState({
            price: data.data.amount,
            priceSource: BTCPriceStore.getSourceRecord('id', 'coinbase')
          });
        }
      )
      .catch(
        () => {
          this.setState({
            price: 0.00,
            priceError: true,
            priceSource: ''
          });
        }
      );
  }

  render() {
    return (
      <div className="btc-price">
        <p>
          Current Price: ${this.state.price} via {this.state.priceSource.label}
          {this.state.priceError === true &&
          <span><br />There was an error fetching the price!</span>
          }
        </p>
      </div>
    );
  }
}

BTCPriceComponent.propTypes = {};

BTCPriceComponent.defaultProps = {};

export default BTCPriceComponent;
