import React from 'react';
import {Link} from 'react-router';

class TableBodyComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.tableData !== nextProps.tableData;
  }

  render() {
    return (
      <tbody>
      {this.props.tableData.map((row, index) =>
        <tr key={index}>
          {Object.values(row).slice(1).map((cell, index) =>
            <td key={index}>
              {index === 0 ? (
                  <Link to={'/experiments/table/' + row.id}>{cell}</Link>
                ) : (
                  <span>{cell}</span>
                )
              }
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
