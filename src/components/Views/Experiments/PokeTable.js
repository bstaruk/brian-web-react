import React from 'react';
import {Link} from 'react-router';
import Content from '../../Content/Content';
import PokeTable from '../../PokeTable/PokeTable';
import PokeTableStore from '../../../stores/PokeTableStore';

class ExpPokeTableComponent extends React.Component {
  constructor() {
    super();
    PokeTableStore.init();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const tableSchema = PokeTableStore.getSchema();

    return (
      <Content>
        <h2 className='content-title'><Link to="/experiments">Experiments</Link> > Table</h2>
        <PokeTable tableHeaders={tableSchema} filterOptions={tableSchema} />
      </Content>
    );
  }
}

ExpPokeTableComponent.defaultProps = {};

export default ExpPokeTableComponent;
