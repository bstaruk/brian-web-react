import React from 'react';
import {Link} from 'react-router';
import Content from '../../Content/Content';
import PassGen from '../../PassGen/PassGen';

class ExpPassGenComponent extends React.Component {
  render() {
    return (
      <Content>
        <h2 className='content-title'><Link to="/experiments">Experiments</Link> > Password Generator</h2>
        <PassGen />
      </Content>
    );
  }
}

ExpPassGenComponent.defaultProps = {};

export default ExpPassGenComponent;
