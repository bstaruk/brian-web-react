import React from 'react';

class TableFilterComponent extends React.Component {
  render() {
    return (
      <div className="table--filter">
        <form>
          <fieldset>
            <div>
              <input type="text" name="query" placeholder="Filter..." onChange={(e) => this.props.handleFilter(e.target.value)} />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

TableFilterComponent.propTypes = {
  handleFilter: React.PropTypes.func.isRequired
};

TableFilterComponent.defaultProps = {};

export default TableFilterComponent;
