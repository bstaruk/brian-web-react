import React from 'react';

class TableBodyComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.tableData !== nextProps.tableData;
  }

  render() {
    return (
      <tbody>
      {this.props.tableData.map((row, index) =>
        <tr key={index}>
          {Object.values(row).map((cell, index) =>
            <td key={index}>
              {cell}
            </td>
          )}
        </tr>
      )}
      {this.props.tableData.length === 0 &&
      <tr>
        <td colSpan={this.props.tableCols}>No data available</td>
      </tr>
      }
      </tbody>
    );
  }
}

TableBodyComponent.propTypes = {
  tableCols: React.PropTypes.number.isRequired,
  tableData: React.PropTypes.array.isRequired
};

TableBodyComponent.defaultProps = {};

export default TableBodyComponent;
