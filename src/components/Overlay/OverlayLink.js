import React from 'react';

class OverlayLinkComponent extends React.Component {
  render() {
    return (
      <span>
        <a onClick={() => this.props.openOverlay(this.props.overlayId)} title={this.props.linkTitle}>
          {this.props.children}
        </a>
      </span>
    );
  }
}

OverlayLinkComponent.propTypes = {
  overlayId: React.PropTypes.string.isRequired,
  openOverlay: React.PropTypes.func.isRequired,
  linkTitle: React.PropTypes.string
};

OverlayLinkComponent.defaultProps = {
  linkTitle: null
};

export default OverlayLinkComponent;
