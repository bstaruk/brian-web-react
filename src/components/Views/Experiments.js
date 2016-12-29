import React from 'react';
import {Link} from 'react-router';
import Content from '../Content/Content';

class ExperimentsComponent extends React.Component {
  render() {
    return (
      <Content>
        <h2 className="content-title">Experiments</h2>
        <p>Variety is the spice of life! Exploration is a prerequisite for happiness.</p>
        <p>Experiment One: <Link to="/experiments/table">A Sortable Table</Link></p>
      </Content>
    );
  }
}

ExperimentsComponent.defaultProps = {
};

export default ExperimentsComponent;
