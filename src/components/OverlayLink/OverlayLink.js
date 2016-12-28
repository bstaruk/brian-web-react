import React from 'react';

class OverlayLinkComponent extends React.Component {
  render() {
    return (
      <span>
        <a href="#" onClick={() => this.props.openOverlay(this.props.overlayId)}>{this.props.children}</a>
      </span>
    );
  }
}

OverlayLinkComponent.propTypes = {
  overlayId: React.PropTypes.string.isRequired,
  openOverlay: React.PropTypes.func.isRequired
};

OverlayLinkComponent.defaultProps = {};

export default OverlayLinkComponent;
