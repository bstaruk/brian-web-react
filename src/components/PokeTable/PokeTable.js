require('./scss/poketable.scss');

import React from 'react';
import PokeTableActions from '../../actions/PokeTableActions';
import PokeTableStore from '../../stores/PokeTableStore';
import PokeTableFilter from './PokeTableFilter';
import PokeTableHead from './PokeTableHead';
import PokeTableBody from './PokeTableBody';
import PokeTablePagination from './PokeTablePagination';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    const defaultSortBy = this.props.tableHeaders[0].id;
    this.state = {
      filter: '',
      filterBy: '',
      pageNum: 1,
      perPage: 25,
      sortBy: defaultSortBy,
      sortDescending: false,
      tableData: PokeTableActions.sort(PokeTableStore.getData(), defaultSortBy, false)
    };
    this._handleSort = this._handleSort.bind(this);
    this._handleFilter = this._handleFilter.bind(this);
    this._handleFilterBy = this._handleFilterBy.bind(this);
    this._handleFilterFull = this._handleFilterFull.bind(this);
    this._handleFilterReset = this._handleFilterReset.bind(this);
    this._handlePagination = this._handlePagination.bind(this);
  }

  _handleSort(id) {
    const newSortDescending = this.state.sortBy === id && !this.state.sortDescending;
    this.setState({
      sortBy: id,
      sortDescending: newSortDescending,
      tableData: PokeTableActions.sort(this.state.tableData, id, newSortDescending)
    });
  }

  _handleFilter(filter) {
    const filterBy = this.state.filterBy;
    this.setState({
      filter: filter,
      tableData: filterBy ? PokeTableActions.filter(PokeTableStore.getData(), filter, filterBy) : PokeTableStore.getData()
    });
  }

  _handleFilterBy(filterBy) {
    this.setState({
      filter: '',
      filterBy: filterBy
    });
  }

  _handleFilterFull(filterBy, id) {
    this.setState({
      filter: id,
      filterBy: filterBy,
      pageNum: 1,
      tableData: filterBy ? PokeTableActions.filter(PokeTableStore.getData(), id, filterBy) : PokeTableStore.getData()
    });
  }

  _handleFilterReset() {
    this.setState({
      filter: '',
      filterBy: '',
      pageNum: 1,
      tableData: PokeTableActions.sort(PokeTableStore.getData(), this.state.sortBy, this.state.sortDescending)
    });
  }

  _handlePagination(pageNum) {
    this.setState({
      pageNum: pageNum
    });
  }

  render() {
    const tableCount = this.state.tableData.length;
    const dataCount = PokeTableStore.getCount();
    return (
      <div className="poketable">
        <PokeTableFilter
          filter={this.state.filter}
          filterBy={this.state.filterBy}
          filterOptions={this.props.filterOptions}
          handleFilter={this._handleFilter}
          handleFilterBy={this._handleFilterBy}
          handleFilterReset={this._handleFilterReset}
        />
        <table>
          <PokeTableHead
            handleSort={this._handleSort}
            sortBy={this.state.sortBy}
            sortDescending={this.state.sortDescending}
            tableHeaders={this.props.tableHeaders}
          />
          <PokeTableBody
            handleFilterFull={this._handleFilterFull}
            tableCols={this.props.tableHeaders.length}
            tableData={this.state.tableData.slice(this.state.perPage * (this.state.pageNum - 1), this.state.perPage * this.state.pageNum)}
          />
        </table>
        {tableCount > 0 &&
        <p className="poketable--count">{tableCount} of {dataCount} records shown</p>
        }
        <PokeTablePagination
          handlePagination={this._handlePagination}
          pageNum={this.state.pageNum}
          perPage={this.state.perPage}
          tableCount={tableCount}
        />
      </div>
    );
  }
}

TableComponent.propTypes = {
  filterOptions: React.PropTypes.array.isRequired,
  tableHeaders: React.PropTypes.array.isRequired
};

TableComponent.defaultProps = {};

export default TableComponent;
