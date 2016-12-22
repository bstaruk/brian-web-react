require('./overlay.scss');

import React from 'react';

class SkillComponent extends React.Component {
  toggleOverlay() {
    this.props.onToggle(this.props.id, false);
  }

  render() {
    return (
      <div className={this.props.active ? 'overlay overlay--active' : 'overlay'}>
        <div className="overlay--content">
          <div className="overlay--toggle" onClick={this.toggleOverlay.bind(this)} title="Close Overlay">
            <i className="fa fa-times-circle" aria-hidden="true" />
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

SkillComponent.propTypes = {
  id: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired
};

SkillComponent.defaultProps = {
  id: 'default-overlay',
  active: true
};

export default SkillComponent;
