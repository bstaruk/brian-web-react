require('./scss/table.scss');

import React from 'react';

class TableComponent extends React.Component {
  render() {
    return (
      <table>
        <tbody>
        <tr>
          {this.props.tableHeaders.map((cell, index) =>
            <th key={index}>
              {cell.label}
            </th>
          )}
        </tr>
        {this.props.tableData.map((row, index) =>
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
