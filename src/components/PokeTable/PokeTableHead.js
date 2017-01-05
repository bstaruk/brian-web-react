import React from 'react';

class PokeTableHeadComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.sortBy !== nextProps.sortBy || this.props.sortDescending !== nextProps.sortDescending;
  }

  render() {
    return (
      <thead>
      <tr>
        {this.props.tableHeaders.map((cell, index) =>
          <th key={index} onClick={() => this.props.handleSort(cell.id)}>
            <span className={this.props.sortBy === cell.id ? this.props.sortDescending ? 'sortBy desc' : 'sortBy asc' : ''}>
              {cell.label}
            </span>
          </th>
        )}
      </tr>
      </thead>
    );
  }
}

PokeTableHeadComponent.propTypes = {
  handleSort: React.PropTypes.func.isRequired,
  sortBy: React.PropTypes.string.isRequired,
  sortDescending: React.PropTypes.bool.isRequired,
  tableHeaders: React.PropTypes.array.isRequired
};

PokeTableHeadComponent.defaultProps = {};

export default PokeTableHeadComponent;
