import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Content from '../../Components/Content/Content';

class ContactComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Content>
          <h2 className="content-title">Contact Me</h2>
          <p>If your name isn't Mom, chances are I won't pick up your call. I do check my emails more than any person should, though! Shoot me a line at <a href="mailto:brian@staruk.me" target="_blank">brian@staruk.me</a> or connect with me via social media if you'd like to chat.</p>
        </Content>
        <Footer />
      </div>
    );
  }
}

ContactComponent.defaultProps = {
};

export default ContactComponent;
