import React from 'react';

class TableHeadComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.sortBy !== nextProps.sortBy || this.props.sortDir !== nextProps.sortDir;
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.tableHeaders.map((cell, index) =>
            <th key={index} onClick={() => this.props.sortAction(cell.id)}>
                <span className={this.props.sortBy === cell.id ? this.props.sortDir + ' sortBy ' : ''}>
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
  sortAction: React.PropTypes.func.isRequired,
  sortBy: React.PropTypes.string.isRequired,
  sortDir: React.PropTypes.string.isRequired,
  tableHeaders: React.PropTypes.array.isRequired
};

TableHeadComponent.defaultProps = {};

export default TableHeadComponent;
