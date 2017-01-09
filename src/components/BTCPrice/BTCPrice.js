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
    this._handleSourceChange = this._handleSourceChange.bind(this);
  }

  componentDidMount() {
    this._getPrice('coinbase');
  }

  _getPrice(source) {
    const priceSource = this.state.priceSource.id === source ? this.state.priceSource : BTCPriceStore.getSourceRecord('id', source);
    fetch(priceSource.api).then(r => r.json())
      .then(
        data => {
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

  _handleSourceChange(source) {
    //this._getPrice(source);
    BTCPriceStore.getPriceNew(source)
      .then(
        (data) => {
          this.setState({
            price: data,
            priceSource: source
          });
        }
      );
  }

  render() {
    return (
      <div className="btc-price">
        <p>
          ${this.state.price} {this.state.priceSource ? 'via ' + this.state.priceSource.label : ''}
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
