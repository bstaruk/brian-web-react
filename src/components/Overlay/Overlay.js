require('./overlay.scss');

import React from 'react';

class SkillComponent extends React.Component {
  render() {
    return (
      <div className={this.props.active ? 'overlay overlay--active' : 'overlay'}>
        <div className="overlay--content">
          <div className="overlay--toggle">
            <a href="#" onClick={this.props.closeOverlay} title="Close Overlay">
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
  active: React.PropTypes.bool.isRequired,
  closeOverlay: React.PropTypes.func.isRequired
};

SkillComponent.defaultProps = {};

export default SkillComponent;
