require('./overlay.scss');

import React from 'react';

class SkillComponent extends React.Component {

  render() {
    return (
      <div className={this.props.active ? 'overlay overlay--active' : 'overlay'}>
        <h3>{this.props.title}</h3>
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
