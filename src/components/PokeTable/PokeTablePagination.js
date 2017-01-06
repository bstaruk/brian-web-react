import React from 'react';

class PokeTablePaginationComponent extends React.Component {
  render() {
    const totalPages = Math.ceil(this.props.tableCount / this.props.perPage);
    return (
      <div className="poketable--pagination">
        <p>
          Page {this.props.pageNum} of {totalPages}
          {this.props.pageNum > 1 &&
          <span> | <a onClick={() => this.props.handlePagination(this.props.pageNum - 1)}>Back</a></span>
          }
          {totalPages > this.props.pageNum &&
          <span> | <a onClick={() => this.props.handlePagination(this.props.pageNum + 1)}>Next</a></span>
          }
        </p>
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
