import React from 'react';
import Content from '../../Content/Content';

class ExperimentsTableComponent extends React.Component {
  render() {
    return (
      <Content>
        <h2 className="content-title">Experiments</h2>
        <p>A sortable table... coming soon.</p>
      </Content>
    );
  }
}

ExperimentsTableComponent.defaultProps = {
};

export default ExperimentsTableComponent;
