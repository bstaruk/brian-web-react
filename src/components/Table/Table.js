require('./scss/table.scss');

import React from 'react';
import TableActions from '../../actions/TableActions';
import TableStore from '../../stores/TableStore';
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
    this._handleFilterReset = this._handleFilterReset.bind(this);




    TableActions.sort(defaultSortBy, false);
    console.log(TableStore.getData());
  }

  _getTableData(sortBy, sortReverse = false, stateData = false) {
    function sortCompare(a, b) {
      const fieldA = a[sortBy] ? a[sortBy].toString().toUpperCase() : '';
      const fieldB = b[sortBy] ? b[sortBy].toString().toUpperCase() : '';
      if (fieldA < fieldB) {
        return -1;
      } else if (fieldA > fieldB) {
        return 1;
      } else {
        return 0;
      }
    }
    const newTableData = stateData ? this.state.tableData.sort(sortCompare) : this.props.tableData.sort(sortCompare);
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
      newTableData = newTableData.filter(function (item) {
        return item[filterBy] ? item[filterBy].toString().toUpperCase().includes(filter.toUpperCase()) : false;
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

  _handleFilterReset() {
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
          filterOptions={this.props.filterOptions}
          handleFilter={this._handleFilter}
          handleFilterBy={this._handleFilterBy}
          handleFilterReset={this._handleFilterReset}
        />
        <table>
          <TableHead
            handleSort={this._handleSort}
            sortBy={this.state.sortBy}
            sortReverse={this.state.sortReverse}
            tableHeaders={this.props.tableHeaders}
          />
          <TableBody
            tableCols={this.props.tableHeaders.length}
            tableData={this.state.tableData}
          />
        </table>
      </div>
    );
  }
}

TableComponent.propTypes = {
  filterOptions: React.PropTypes.array.isRequired,
  tableHeaders: React.PropTypes.array.isRequired,
  tableData: React.PropTypes.array.isRequired
};

TableComponent.defaultProps = {};

export default TableComponent;
