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
    this._getPrice('coinbase');
  }

  _getPrice(source) {
    const priceSource = this.state.priceSource.id === source ? this.state.priceSource : BTCPriceStore.getSourceRecord('id', source);
    fetch(priceSource.api).then(r => r.json())
      .then(
        data => {
          console.log(BTCPriceStore.getPrice(data, source));
          this.setState({
            price: BTCPriceStore.getPrice(data, source),
            priceSource: priceSource
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
          Current Price: ${this.state.price} {this.state.priceSource ? 'via ' + this.state.priceSource.label : ''}
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
