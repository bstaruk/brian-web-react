import React from 'react';

class PokeTablePaginationComponent extends React.Component {
  render() {
    const totalPages = Math.ceil(this.props.tableCount / this.props.perPage);
    return (
      <div className="poketable--pagination">
        {totalPages > 1 &&
        <ul>
          <li>
            <button disabled={this.props.pageNum <= 1} onClick={() => this.props.handlePagination(this.props.pageNum - 1)}>« Back</button>
          </li>
          <li>
            <button disabled={totalPages <= this.props.pageNum} onClick={() => this.props.handlePagination(this.props.pageNum + 1)}>Next »</button>
          </li>
          <li>Page {this.props.pageNum} of {totalPages}</li>
        </ul>
        }
      </div>
    );
  }
}

PokeTablePaginationComponent.propTypes = {
  handlePagination: React.PropTypes.func.isRequired,
  pageNum: React.PropTypes.number.isRequired,
  perPage: React.PropTypes.number.isRequired,
  tableCount: React.PropTypes.number.isRequired
};

PokeTablePaginationComponent.defaultProps = {};

export default PokeTablePaginationComponent;
