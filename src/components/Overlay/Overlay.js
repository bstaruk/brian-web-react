require('./overlay.scss');

import React from 'react';

class SkillComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayActive: this.props.active
    };
  }

  toggleOverlay() {
    this.setState({
      overlayActive: !this.state.overlayActive
    });
  }

  render() {
    return (
      <div className={this.state.overlayActive ? 'overlay overlay--active' : 'overlay'}>
        <div className="overlay--content">
          <div className="overlay--toggle" onClick={this.toggleOverlay.bind(this)}>{this.state.overlayActive ? 'Close' : 'Open'} Overlay</div>
          <h3>{this.props.title}</h3>
          {this.props.children}
        </div>
      </div>
    );
  }
}

SkillComponent.propTypes = {
  title: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired
};

SkillComponent.defaultProps = {
  title: 'Default Title',
  active: true
};

export default SkillComponent;
