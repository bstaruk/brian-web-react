require('normalize.css/normalize.css');

import React from 'react';
import Header from '../Header/Header';

let yeomanImage = require('../../assets/images/yeoman.png');

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">this is the homepage</div>
      </div>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;
