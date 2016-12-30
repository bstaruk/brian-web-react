require('./scss/table.scss');

import React from 'react';
import _ from 'lodash';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    const defaultSortBy = this.props.tableHeaders[0].id;
    const defaultTableData = _.sortBy(this.props.tableData, defaultSortBy);
    this.state = {
      tableData: defaultTableData,
      sortBy: defaultSortBy,
      sortDir: 'ASC'
    };
    this._handleSort = this._handleSort.bind(this);
  }

  _handleSort(id) {
    let newTableData = [];
    let newSortDir = null;
    if (this.state.sortBy === id && this.state.sortDir === 'ASC') {
      newTableData = _.sortBy(this.state.tableData, id).reverse();
      newSortDir = 'DESC';
    } else {
      newTableData = _.sortBy(this.state.tableData, id);
      newSortDir = 'ASC';
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
        <tbody>
        <tr>
          {this.props.tableHeaders.map((cell, index) =>
            <th key={index}>
              <span onClick={() => this._handleSort(cell.id)} className={this.state.sortBy === cell.id ? 'sortBy' : ''}>
                {cell.label}
              </span>
            </th>
          )}
        </tr>
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
