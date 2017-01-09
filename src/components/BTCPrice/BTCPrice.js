require('./scss/btcprice.scss');

import React from 'react';

class BTCPriceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0.00,
      priceError: false
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
            price: data.data.amount
          });
        }
      )
      .catch(
        () => {
          this.setState({
            price: 0.00,
            priceError: true
          });
        }
      );
  }

  render() {
    return (
      <div className="btc-price">
        <p>
          Current Price: ${this.state.price}
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
