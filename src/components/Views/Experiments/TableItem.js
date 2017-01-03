import React from 'react';
import Content from '../../Content/Content';
import {Link} from 'react-router';
import tableData from '../../../assets/json/tableData.json';

class ExperimentsTableItemComponent extends React.Component {
  render() {
    const itemId = this.props.routeParams.item;
    const itemData = tableData.find(function (data) {
      return data.id == itemId;
    });
    console.log(itemData);
    return (
      <Content>
        <h2 className='content-title'><Link to="/experiments">Experiments</Link> > <Link
          to="/experiments/table">Table</Link> > Table Item</h2>
        {
          itemData &&
          <ul>
            {Object.keys(itemData).map((k, index) =>
              <li key={index}>
                {k}: {itemData[k]}
              </li>
            )}
          </ul>
        }
      </Content>
    );
  }
}

ExperimentsTableItemComponent.defaultProps = {};

export default ExperimentsTableItemComponent;
