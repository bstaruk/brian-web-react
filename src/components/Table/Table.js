require('./scss/table.scss');

import React from 'react';
import _ from 'lodash';
import TableHead from './TableHead';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    const defaultSortBy = this.props.tableHeaders[0].id;
    const defaultTableData = _.sortBy(this.props.tableData, defaultSortBy);
    this.state = {
      tableData: defaultTableData,
      sortBy: defaultSortBy,
      sortDir: 'asc'
    };
    this._handleSort = this._handleSort.bind(this);
  }

  _handleSort(id) {
    let newTableData = [],
      newSortDir = null;
    if (this.state.sortBy === id && this.state.sortDir === 'asc') {
      newTableData = _.sortBy(this.state.tableData, id).reverse();
      newSortDir = 'desc';
    } else {
      newTableData = _.sortBy(this.state.tableData, id);
      newSortDir = 'asc';
    }
    this.setState({
      sortBy: id,
      sortDir: newSortDir,
      tableData: newTableData
    });
  }

  render() {
    return (
      <table>
        <TableHead
          sortAction={this._handleSort}
          sortBy={this.state.sortBy}
          sortDir={this.state.sortDir}
          tableHeaders={this.props.tableHeaders}
        />
        <tbody>
        {this.state.tableData.map((row, index) =>
          <tr key={index}>
            {Object.values(row).map((cell, index) =>
              <td key={index}>
                {cell}
              </td>
            )}
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}

TableComponent.propTypes = {
  tableHeaders: React.PropTypes.array.isRequired,
  tableData: React.PropTypes.array.isRequired
};

TableComponent.defaultProps = {};

export default TableComponent;
