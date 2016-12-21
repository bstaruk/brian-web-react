require('normalize.css/normalize.css');

import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <div className="notice">this is the homepage</div>
        <Footer />
      </div>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;
