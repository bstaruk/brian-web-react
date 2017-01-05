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
                    <Link to={'/experiments/poketable/' + row.nat}
                          className={'type ' + row.typea.toLowerCase()}>{cell}</Link>
                    {row.typea &&
                    <a className={'poketable--type-badge typea ' + row.typea.toLowerCase()}
                       onClick={() => this.props.handleFilterFull('typea', row.typea)}
                       title={'View more ' + row.typea + ' types'}>
                      {row.typea.toUpperCase()}
                    </a>
                    }
                    {row.typeb &&
                    <a className={'poketable--type-badge typeb ' + row.typeb.toLowerCase()}
                       onClick={() => this.props.handleFilterFull('typeb', row.typeb)}
                       title={'View more ' + row.typea + ' types'}>
                      {row.typeb.toUpperCase()}
                    </a>
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
  handleFilterFull: React.PropTypes.func.isRequired,
  tableCols: React.PropTypes.number.isRequired,
  tableData: React.PropTypes.array.isRequired
};

PokeTableBodyComponent.defaultProps = {};

export default PokeTableBodyComponent;
