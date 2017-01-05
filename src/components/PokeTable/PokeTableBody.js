import React from 'react';
import {Link} from 'react-router';

class PokeTableBodyComponent extends React.Component {
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

PokeTableBodyComponent.propTypes = {
  tableCols: React.PropTypes.number.isRequired,
  tableData: React.PropTypes.array.isRequired
};

PokeTableBodyComponent.defaultProps = {};

export default PokeTableBodyComponent;
