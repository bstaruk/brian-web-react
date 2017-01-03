import React from 'react';
import Content from '../Content/Content';

class NoMatchComponent extends React.Component {
  render() {
    return (
      <Content>
        <h2 className="content-title">Page Not Found (404)</h2>
        <p>You seem lost...</p>
      </Content>
    );
  }
}

NoMatchComponent.defaultProps = {
};

export default NoMatchComponent;
