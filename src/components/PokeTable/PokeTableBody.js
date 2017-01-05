import React from 'react';
import {Link} from 'react-router';

class PokeTableBodyComponent extends React.Component {
  render() {
    return (
      <tbody>
      {this.props.tableData.map((row, index) =>
        <tr key={index}>
          {Object.values(row).map((cell, index) =>
            <td key={index}>
              {index === 1 ? (
                  <Link to={'/experiments/table/' + row.nat}>{cell}</Link>
                ) : (
                  <span>{cell ? cell : 'N/A'}</span>
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

PokeTableBodyComponent.propTypes = {
  tableCols: React.PropTypes.number.isRequired,
  tableData: React.PropTypes.array.isRequired
};

PokeTableBodyComponent.defaultProps = {};

export default PokeTableBodyComponent;
