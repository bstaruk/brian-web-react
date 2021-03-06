require('./scss/overlay.scss');

import React from 'react';

class OverlayComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.active !== nextProps.active;
  }

  render() {
    return (
      <div className={this.props.active ? 'overlay overlay--active' : 'overlay'}>
        <div className="overlay--content">
          <div className="overlay--toggle">
            <a onClick={this.props.closeOverlay} title="Close Overlay">
              <i className="fa fa-times-circle" aria-hidden={true} />
            </a>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

OverlayComponent.propTypes = {
  active: React.PropTypes.bool.isRequired,
  closeOverlay: React.PropTypes.func.isRequired
};

OverlayComponent.defaultProps = {};

export default OverlayComponent;
