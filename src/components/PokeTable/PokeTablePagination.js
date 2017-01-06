import React from 'react';

class PokeTablePaginationComponent extends React.Component {
  render() {
    const totalPages = Math.ceil(this.props.tableCount / this.props.perPage);
    return (
      <div className="poketable--pagination">
        <p>Page {this.props.pageNum} of {totalPages}</p>
        {this.props.pageNum > 1 &&
        <p><span><a onClick={() => this.props.handlePagination(this.props.pageNum - 1)}>Back</a></span></p>
        }
        {totalPages > this.props.pageNum &&
        <p><span><a onClick={() => this.props.handlePagination(this.props.pageNum + 1)}>Next</a></span></p>
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
