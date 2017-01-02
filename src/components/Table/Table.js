require('./scss/table.scss');

import React from 'react';
import _ from 'lodash';
import TableFilter from './TableFilter';
import TableHead from './TableHead';
import TableBody from './TableBody';

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
      <div className="table">
        <TableFilter />
        <table>
          <TableHead
            sortAction={this._handleSort}
            sortBy={this.state.sortBy}
            sortDir={this.state.sortDir}
            tableHeaders={this.props.tableHeaders}
          />
          <TableBody
            tableData={this.state.tableData}
          />
        </table>
      </div>
    );
  }
}

TableComponent.propTypes = {
  tableHeaders: React.PropTypes.array.isRequired,
  tableData: React.PropTypes.array.isRequired
};

TableComponent.defaultProps = {};

export default TableComponent;
