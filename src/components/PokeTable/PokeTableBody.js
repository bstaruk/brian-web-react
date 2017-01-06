import React from 'react';
import PokeTableBodyRow from './PokeTableBodyRow';

class PokeTableBodyComponent extends React.Component {
  render() {
    return (
      <tbody>
      {this.props.tableData.map((row, index) =>
        <PokeTableBodyRow rowData={row} handleFilterFull={this.props.handleFilterFull} key={index} />
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
  handleFilterFull: React.PropTypes.func.isRequired,
  tableCols: React.PropTypes.number.isRequired,
  tableData: React.PropTypes.array.isRequired
};

PokeTableBodyComponent.defaultProps = {};

export default PokeTableBodyComponent;
