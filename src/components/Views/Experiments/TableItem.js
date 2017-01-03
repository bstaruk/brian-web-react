import React from 'react';
import Content from '../../Content/Content';
import {Link} from 'react-router';

class ExperimentsTableItemComponent extends React.Component {
  render() {
    const itemId = this.props.routeParams.item;
    console.log(itemId);
    return (
      <Content>
        <h2 className='content-title'><Link to="/experiments">Experiments</Link> > <Link to="/experiments/table">Table</Link> > Table Item</h2>
        <p>Table item content.</p>
      </Content>
    );
  }
}

ExperimentsTableItemComponent.defaultProps = {};

export default ExperimentsTableItemComponent;
