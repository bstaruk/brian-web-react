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
    this.state = {
      filter: '',
      filterBy: '',
      sortBy: defaultSortBy,
      sortReverse: false,
      tableData: this._getTableData(defaultSortBy)
    };
    this._handleSort = this._handleSort.bind(this);
    this._handleFilter = this._handleFilter.bind(this);
    this._handleFilterBy = this._handleFilterBy.bind(this);
    this._handleFilterClear = this._handleFilterClear.bind(this);
  }

  _getTableData(sortBy, sortReverse = false, stateData = false) {
    let newTableData = _.sortBy(
      stateData ? this.state.tableData : this.props.tableData,
      sortBy
    );
    return sortReverse ? newTableData.reverse() : newTableData;
  }

  _handleSort(id) {
    let newTableData = [],
      newSortReverse = false;
    if (this.state.sortBy === id && !this.state.sortReverse) {
      newTableData = this._getTableData(id, true, true);
      newSortReverse = true;
    } else {
      newTableData = this._getTableData(id, false, true);
    }
    this.setState({
      sortBy: id,
      sortReverse: newSortReverse,
      tableData: newTableData
    });
  }

  _handleFilter(filter) {
    let newTableData = this._getTableData(this.state.sortBy, this.state.sortReverse);
    const filterBy = this.state.filterBy;
    if (filterBy) {
      newTableData = _.filter(newTableData, function(e) {
        return e[filterBy].toString().toLowerCase().includes(filter.toLowerCase());
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
    let newTableData = this._getTableData(this.state.sortBy, this.state.sortReverse);
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
            sortDir={this.state.sortReverse ? 'desc' : 'asc'}
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
