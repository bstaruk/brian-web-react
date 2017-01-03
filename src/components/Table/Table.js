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
      filter: '',
      filterBy: '',
      sortBy: defaultSortBy,
      sortDir: 'asc',
      tableData: defaultTableData
    };
    this._handleSort = this._handleSort.bind(this);
    this._handleFilter = this._handleFilter.bind(this);
    this._handleFilterBy = this._handleFilterBy.bind(this);
    this._handleFilterClear = this._handleFilterClear.bind(this);
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

  _handleFilter(filter) {
    let newTableData = [];
    const filterBy = this.state.filterBy;
    if (filterBy) {
      newTableData = _.filter(this.state.tableData, function(e) {
        return e[filterBy].toString().includes(filter);
      });
    }
    this.setState({
      filter: filter,
      tableData: newTableData
    });
  }

  _handleFilterBy(filterBy) {
    this.setState({
      filter: '',
      filterBy: filterBy
    });
  }

  _handleFilterClear() {
    const newTableData = _.sortBy(this.props.tableData, this.state.sortBy);
    this.setState({
      filter: '',
      filterBy: '',
      tableData: newTableData
    });
  }

  render() {
    return (
      <div className="table">
        <TableFilter
          filter={this.state.filter}
          filterBy={this.state.filterBy}
          handleFilter={this._handleFilter}
          handleFilterBy={this._handleFilterBy}
          handleFilterClear={this._handleFilterClear}
          tableHeaders={this.props.tableHeaders}
        />
        <table>
          <TableHead
            handleSort={this._handleSort}
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
