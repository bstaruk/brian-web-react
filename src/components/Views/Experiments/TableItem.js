import React from 'react';
import Content from '../../Content/Content';
import {Link} from 'react-router';
import tableData from '../../../assets/json/tableData.json';

class ExperimentsTableItemComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.routeParams.item !== nextProps.routeParams.item;
  }

  render() {
    const itemId = this.props.routeParams.item;
    const itemData = tableData.find(function (data) {
      return data.id == itemId;
    });
    const itemTitle = itemData[this.props.route.title];
    return (
      <Content>
        <h2 className='content-title'>
          <Link to="/experiments">Experiments</Link>
          <span> > </span>
          <Link to="/experiments/table">Table</Link>
          <span> > </span>
          {itemTitle}
        </h2>
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
