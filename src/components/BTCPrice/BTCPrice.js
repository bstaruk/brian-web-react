require('./scss/btcprice.scss');

import React from 'react';

class BTCPriceComponent extends React.Component {
  render() {
    return (
      <div className="btc-price">
        <p>BTCPrice.js</p>
      </div>
    );
  }
}

BTCPriceComponent.propTypes = {};

BTCPriceComponent.defaultProps = {};

export default BTCPriceComponent;
