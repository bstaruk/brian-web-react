require('normalize.css/normalize.css');

import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          this is the home page
        </div>
        <Footer />
      </div>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;
