require('./scss/content.scss');

import React from 'react';

class ContentComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

ContentComponent.defaultProps = {};

export default ContentComponent;
