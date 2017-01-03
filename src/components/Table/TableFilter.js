import React from 'react';

class TableFilterComponent extends React.Component {
  render() {
    return (
      <div className="table--filter">
        <form autoComplete={false}>
          <fieldset>
            <div>
              <select
                onChange={(e) => this.props.handleFilterBy(e.target.value)}
                value={this.props.filterBy}
              >
                <option value="" disabled>Select a Field</option>
                {this.props.tableHeaders.map((item, index) =>
                  <option key={index} value={item.id}>{item.label}</option>
                )}
              </select>
              <input
                type="text"
                name="query"
                placeholder="Enter a filter..."
                onChange={(e) => this.props.handleFilter(e.target.value)}
                value={this.props.filter}
                disabled={!this.props.filterBy}
              />
              <button type="button" onClick={() => this.props.handleFilterClear()}>Clear</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

TableFilterComponent.propTypes = {
  filter: React.PropTypes.string.isRequired,
  filterBy: React.PropTypes.string.isRequired,
  handleFilter: React.PropTypes.func.isRequired,
  handleFilterBy: React.PropTypes.func.isRequired,
  handleFilterClear: React.PropTypes.func.isRequired,
  tableHeaders: React.PropTypes.array.isRequired
};

TableFilterComponent.defaultProps = {};

export default TableFilterComponent;
