import React from 'react';

class TableHeadComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.sortBy !== nextProps.sortBy || this.props.sortReverse !== nextProps.sortReverse;
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.tableHeaders.map((cell, index) =>
            <th key={index} onClick={() => this.props.handleSort(cell.id)}>
                <span className={this.props.sortBy === cell.id ? this.props.sortReverse ? 'sortBy desc' : 'sortBy asc' : ''}>
                  {cell.label}
                </span>
            </th>
          )}
        </tr>
      </thead>
    );
  }
}

TableHeadComponent.propTypes = {
  handleSort: React.PropTypes.func.isRequired,
  sortBy: React.PropTypes.string.isRequired,
  sortReverse: React.PropTypes.bool.isRequired,
  tableHeaders: React.PropTypes.array.isRequired
};

TableHeadComponent.defaultProps = {};

export default TableHeadComponent;
