import React from 'react';
import Content from '../../Content/Content';
import Table from '../../Table/Table';
import {Link} from 'react-router';
import tableData from '../../../assets/json/tableData.json';

class ExperimentsTableComponent extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const tableHeaders = [
      {id: 'firstName', label: 'First Name'},
      {id: 'lastName', label: 'Last Name'},
      {id: 'company', label: 'Company'}
    ];

    return (
      <Content>
        <h2 className='content-title'><Link to="/experiments">Experiments</Link> > Table</h2>
        <Table tableData={tableData} tableHeaders={tableHeaders} filterOptions={tableHeaders} />
      </Content>
    );
  }
}

ExperimentsTableComponent.defaultProps = {};

export default ExperimentsTableComponent;
