import React from 'react';
import Content from '../../Content/Content';
import Table from '../../Table/Table';

class ExperimentsTableComponent extends React.Component {
  render() {
    const tableHeaders = [
      {id: 'firstName', label: 'First Name'},
      {id: 'lastName', label: 'Last Name'},
      {id: 'age', label: 'Age'}
    ];
    const tableData = [
      {firstName: 'Malcom', lastName: 'Reynolds', age: 25},
      {firstName: 'Kaylee', lastName: 'Frye', age: 29},
      {firstName: 'Jayne', lastName: 'Cobb', age: 33},
      {firstName: 'John', lastName: 'Jimmerson', age: 89}
    ];

    return (
      <Content>
        <h2 className='content-title'>Experiments > Table</h2>
        <Table tableData={tableData} tableHeaders={tableHeaders}/>
      </Content>
    );
  }
}

ExperimentsTableComponent.defaultProps = {};

export default ExperimentsTableComponent;
