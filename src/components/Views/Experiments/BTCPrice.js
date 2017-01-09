import React from 'react';
import {Link} from 'react-router';
import Content from '../../Content/Content';
import BTCPrice from '../../BTCPrice/BTCPrice';
import BTCPriceStore from '../../../stores/BTCPriceStore';

class ExpBTCPriceComponent extends React.Component {
  constructor() {
    super();
    BTCPriceStore.init();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Content>
        <h2 className='content-title'><Link to="/experiments">Experiments</Link> > BTC Price</h2>
        <BTCPrice />
      </Content>
    );
  }
}

ExpBTCPriceComponent.defaultProps = {
};

export default ExpBTCPriceComponent;
