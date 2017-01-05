import React from 'react';
import {Link} from 'react-router';
import Content from '../../Content/Content';
import Table from '../../Table/Table';
import TableStore from '../../../stores/TableStore';

class ExperimentsTableComponent extends React.Component {
  constructor() {
    super();
    TableStore.init();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const tableSchema = TableStore.getSchema();

    return (
      <Content>
        <h2 className='content-title'><Link to="/experiments">Experiments</Link> > Table</h2>
        <Table tableHeaders={tableSchema} filterOptions={tableSchema} />
      </Content>
    );
  }
}

ExperimentsTableComponent.defaultProps = {};

export default ExperimentsTableComponent;
