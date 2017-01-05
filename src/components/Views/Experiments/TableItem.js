import React from 'react';
import Content from '../../Content/Content';
import {Link} from 'react-router';
import PokeTableStore from '../../../stores/PokeTableStore';

class ExperimentsTableItemComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.routeParams.item !== nextProps.routeParams.item;
  }

  render() {
    PokeTableStore.init();
    const itemData = PokeTableStore.getRecord('nat', this.props.routeParams.item);
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
                <strong>{PokeTableStore.getSchemaProp(k, 'label')}:</strong> {itemData[k] ? itemData[k] : 'N/A'}
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
