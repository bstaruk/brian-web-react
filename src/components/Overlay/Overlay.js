require('./overlay.scss');

import React from 'react';

class SkillComponent extends React.Component {
  constructor() {
    super();
    this._handleCloseOverlay = this._handleCloseOverlay.bind(this);
  }

  _handleCloseOverlay() {
    this.props.onToggle(this.props.id, false);
  }

  render() {
    return (
      <div className={this.props.active ? 'overlay overlay--active' : 'overlay'}>
        <div className="overlay--content">
          <div className="overlay--toggle">
            <a href="#" onClick={this._handleCloseOverlay} title="Close Overlay">
              <i className="fa fa-times-circle" aria-hidden={true} />
            </a>
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

SkillComponent.defaultProps = {};

export default SkillComponent;
