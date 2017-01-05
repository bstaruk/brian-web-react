require('./scss/poketable.scss');

import React from 'react';
import PokeTableActions from '../../actions/PokeTableActions';
import PokeTableStore from '../../stores/PokeTableStore';
import PokeTableFilter from './PokeTableFilter';
import PokeTableHead from './PokeTableHead';
import PokeTableBody from './PokeTableBody';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    const defaultSortBy = this.props.tableHeaders[0].id;
    PokeTableActions.sort(defaultSortBy, false);
    this.state = {
      filter: '',
      filterBy: '',
      sortBy: defaultSortBy,
      sortDescending: false,
      tableData: PokeTableStore.getData()
    };
    this._handleSort = this._handleSort.bind(this);
    this._handleFilter = this._handleFilter.bind(this);
    this._handleFilterBy = this._handleFilterBy.bind(this);
    this._handleFilterReset = this._handleFilterReset.bind(this);
  }

  _handleSort(id) {
    const newSortDescending = this.state.sortBy === id && !this.state.sortDescending;
    PokeTableActions.sort(id, newSortDescending);
    this.setState({
      sortBy: id,
      sortDescending: newSortDescending,
      tableData: PokeTableStore.getData()
    });
  }

  _handleFilter(filter) {
    let newTableData = PokeTableStore.getData();
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
      tableData: PokeTableStore.getData()
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
            tableCols={this.props.tableHeaders.length}
            tableData={this.state.tableData}
          />
        </table>
        {tableCount > 0 &&
        <p className="poketable--count">{tableCount} of {dataCount} records shown</p>
        }
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
