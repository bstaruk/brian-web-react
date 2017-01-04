import React from 'react';
import Content from '../Content/Content';

class ContactComponent extends React.Component {
  render() {
    return (
      <Content className="view--contact">
        <h2 className="content-title">Contact Me</h2>
        <p>Want to hire me, or just say hello? I'm always around!</p>
        <p>If your name isn't Mom, chances are I won't pick up your call. I do check my emails more than any person should, though! Shoot me a line at <a href="mailto:brian@staruk.me" target="_blank" className="alt icon-after email">brian@staruk.me</a> or connect with me on <a href="https://www.linkedin.com/in/brian-staruk" target="_blank" className="alt icon-after external">LinkedIn</a> if you'd like to chat.</p>
      </Content>
    );
  }
}

ContactComponent.defaultProps = {
};

export default ContactComponent;
