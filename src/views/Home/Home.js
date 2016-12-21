import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Content from '../../Components/Content/Content';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Content>
          <h2>Home</h2>
          <ul className="list">
            <li>test</li>
            <li>test</li>
          </ul>
        </Content>
        <Footer />
      </div>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;
