import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Content from '../../Components/Content/Content';

class AboutComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Content>
          <h2 className="content-title">About</h2>
          <ul>
            <li>test</li>
            <li>test</li>
          </ul>
        </Content>
        <Footer />
      </div>
    );
  }
}

AboutComponent.defaultProps = {
};

export default AboutComponent;
