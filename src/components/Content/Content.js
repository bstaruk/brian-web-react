require('./content.scss');

import React from 'react';

class ContentComponent extends React.Component {
  render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
}

ContentComponent.defaultProps = {};

export default ContentComponent;
