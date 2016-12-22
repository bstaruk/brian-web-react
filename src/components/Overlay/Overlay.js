require('./overlay.scss');

import React from 'react';

class SkillComponent extends React.Component {
  toggleOverlay() {
    this.props.onToggle(this.props.slug, false);
  }

  render() {
    return (
      <div className={this.props.active ? 'overlay overlay--active' : 'overlay'}>
        <div className="overlay--content">
          <div className="overlay--toggle" onClick={this.toggleOverlay.bind(this)}>{this.props.active ? 'Close' : 'Open'} Overlay</div>
          <h3>{this.props.title}</h3>
          {this.props.children}
        </div>
      </div>
    );
  }
}

SkillComponent.propTypes = {
  slug: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired
};

SkillComponent.defaultProps = {
  slug: 'default-overlay',
  title: 'Default Title',
  active: true
};

export default SkillComponent;
