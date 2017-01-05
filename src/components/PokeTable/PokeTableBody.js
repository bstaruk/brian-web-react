import React from 'react';
import {Link} from 'react-router';

class PokeTableBodyComponent extends React.Component {
  render() {
    return (
      <tbody>
      {this.props.tableData.map((row, index) =>
        <tr key={index}>
          {Object.values(row).slice(0, 9).map((cell, index) =>
            <td key={index}>
              {index === 1 ? (
                  <span>
                    <Link to={'/experiments/table/' + row.nat}>{cell}</Link>
                    {row.typea &&
                    <span className={'poketable--type-badge ' + row.typea.toLowerCase()}>{row.typea.toUpperCase()}</span>
                    }
                    {row.typeb &&
                    <span className={'poketable--type-badge ' + row.typeb.toLowerCase()}>{row.typeb.toUpperCase()}</span>
                    }
                  </span>
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
