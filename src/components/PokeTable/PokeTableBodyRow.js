import React from 'react';
import {Link} from 'react-router';

class PokeTableBodyRowComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.rowData !== nextProps.rowData;
  }

  render() {
    const rowData = this.props.rowData;
    return (
      <tr>
        {Object.values(rowData).slice(0, 9).map((cell, index) =>
          <td key={index}>
            {index === 1 ? (
                <span>
                    <Link to={'/experiments/poketable/' + rowData.nat}
                          className={'type ' + rowData.typea.toLowerCase()}>{cell}</Link>
                  {rowData.typea &&
                  <a className={'poketable--type-badge typea ' + rowData.typea.toLowerCase()}
                     onClick={() => this.props.handleFilterFull('typea', rowData.typea)}
                     title={'View more ' + rowData.typea + ' types'}>
                    {rowData.typea.toUpperCase()}
                  </a>
                  }
                  {rowData.typeb &&
                  <a className={'poketable--type-badge typeb ' + rowData.typeb.toLowerCase()}
                     onClick={() => this.props.handleFilterFull('typeb', rowData.typeb)}
                     title={'View more ' + rowData.typeb + ' secondary types'}>
                    {rowData.typeb.toUpperCase()}
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
    );
  }
}

PokeTableBodyRowComponent.propTypes = {
  handleFilterFull: React.PropTypes.func.isRequired,
  rowData: React.PropTypes.object.isRequired
};

PokeTableBodyRowComponent.defaultProps = {};

export default PokeTableBodyRowComponent;
