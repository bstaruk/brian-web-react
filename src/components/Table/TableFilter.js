import React from 'react';

class TableFilterComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.filter !== nextProps.filter || this.props.filterBy !== nextProps.filterBy;
  }

  render() {
    return (
      <div className="table--filter">
        <form autoComplete="off">
          <fieldset>
            <div>
              <select
                onChange={(e) => this.props.handleFilterBy(e.target.value)}
                value={this.props.filterBy}
              >
                <option value="" disabled>Select a Field</option>
                {this.props.filterOptions.map((item, index) =>
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
              <button type="button" onClick={() => this.props.handleFilterReset()}>Reset</button>
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
  filterOptions: React.PropTypes.array.isRequired,
  handleFilter: React.PropTypes.func.isRequired,
  handleFilterBy: React.PropTypes.func.isRequired,
  handleFilterReset: React.PropTypes.func.isRequired
};

TableFilterComponent.defaultProps = {};

export default TableFilterComponent;
