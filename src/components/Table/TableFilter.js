import React from 'react';

class TableFilterComponent extends React.Component {
  render() {
    return (
      <div className="table--filter">
        <form>
          <fieldset>
            <div>
              <input type="text" name="query" placeholder="Filter..." />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

TableFilterComponent.propTypes = {};

TableFilterComponent.defaultProps = {};

export default TableFilterComponent;
