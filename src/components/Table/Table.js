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
    TableActions.sort(defaultSortBy, false);
    this.state = {
      filter: '',
      filterBy: '',
      sortBy: defaultSortBy,
      sortReverse: false,
      tableData: TableStore.getData()
    };
    this._handleSort = this._handleSort.bind(this);
    this._handleFilter = this._handleFilter.bind(this);
    this._handleFilterBy = this._handleFilterBy.bind(this);
    this._handleFilterReset = this._handleFilterReset.bind(this);
  }

  _handleSort(id) {
    const newSortReverse = this.state.sortBy === id && !this.state.sortReverse;
    TableActions.sort(id, newSortReverse);
    this.setState({
      sortBy: id,
      sortReverse: newSortReverse,
      tableData: TableStore.getData()
    });
  }

  _handleFilter(filter) {
    let newTableData = TableStore.getData();
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
    this.setState({
      filter: '',
      filterBy: '',
      tableData: TableStore.getData()
    });
  }

  render() {
    const tableCount = this.state.tableData.length;
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
        {tableCount > 0 &&
        <p className="table--count">{tableCount} of  records shown</p>
        }
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
