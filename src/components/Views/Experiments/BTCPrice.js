import React from 'react';
import {Link} from 'react-router';
import Content from '../../Content/Content';

class ExpBTCPriceComponent extends React.Component {
  render() {
    return (
      <Content>
        <h2 className='content-title'><Link to="/experiments">Experiments</Link> > BTC Price</h2>
        <p>Hi mom!</p>
      </Content>
    );
  }
}

ExpBTCPriceComponent.defaultProps = {
};

export default ExpBTCPriceComponent;
