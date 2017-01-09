import React from 'react';
import {Link} from 'react-router';
import Content from '../../Content/Content';

class ExpPassGenComponent extends React.Component {
  render() {
    return (
      <Content>
        <h2 className='content-title'><Link to="/experiments">Experiments</Link> > Password Generator</h2>
        <p>Hi mom!</p>
      </Content>
    );
  }
}

ExpPassGenComponent.defaultProps = {};

export default ExpPassGenComponent;
