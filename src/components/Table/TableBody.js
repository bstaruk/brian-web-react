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
      </tbody>
    );
  }
}

TableBodyComponent.propTypes = {
  tableData: React.PropTypes.array.isRequired
};

TableBodyComponent.defaultProps = {};

export default TableBodyComponent;
