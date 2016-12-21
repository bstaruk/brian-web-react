require('normalize.css/normalize.css');

import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

class AboutComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          this is the about page
        </div>
        <Footer />
      </div>
    );
  }
}

AboutComponent.defaultProps = {
};

export default AboutComponent;
