import React from 'react';
import Content from '../../Content/Content';
import {Link} from 'react-router';
import PokeTableStore from '../../../stores/PokeTableStore';

class ExpPokeTableItemComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.routeParams.item !== nextProps.routeParams.item;
  }

  render() {
    PokeTableStore.init();
    const itemData = PokeTableStore.getRecord('nat', this.props.routeParams.item);

    return (
      <Content>
        {
          itemData &&
            <div>
              <h2 className='content-title'>
                <Link to="/experiments">Experiments</Link>
                <span> > </span>
                <Link to="/experiments/poketable">Poké Table</Link>
                <span> > </span>
                {itemData.name} (#{itemData.nat})
              </h2>
              <h3>Base Stats</h3>
              <ul>
                <li>Health Points: {itemData.hp}</li>
                <li>Attack: {itemData.atk}</li>
                <li>Defense: {itemData.def}</li>
                <li>Special Attack: {itemData.spa}</li>
                <li>Special Defense: {itemData.spd}</li>
                <li>Speed: {itemData.spe}</li>
                <li>Total: {itemData.total}</li>
              </ul>
            </div>
        }
      </Content>
    );
  }
}

ExpPokeTableItemComponent.defaultProps = {};

export default ExpPokeTableItemComponent;
