require('normalize.css/normalize.css');

import React from 'react';
import Header from '../../Components/Header/Header';

let yeomanImage = require('../../assets/images/yeoman.png');

class AboutComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">this is the about page</div>
      </div>
    );
  }
}

AboutComponent.defaultProps = {
};

export default AboutComponent;
