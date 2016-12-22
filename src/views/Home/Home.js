import React from 'react';
import Header from '../../Components/Header/Header';
import Content from '../../Components/Content/Content';
import Overlay from '../../Components/Overlay/Overlay';
import Footer from '../../Components/Footer/Footer';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'test1': 'test2'
    };
  }

  handleOverlayToggle(overlayId, toggle) {
    var newState = {};
    newState[overlayId] = toggle;
    this.setState(newState);
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Content>
          <Overlay slug="testOverlay1" title="Test Overlay 1" active={this.state.testOverlay1 === true} onToggle={this.handleOverlayToggle.bind(this)}>
            <p>test one</p>
          </Overlay>
          <h2 className="content-title">Home</h2>
          <p><a onClick={this.handleOverlayToggle.bind(this, 'testOverlay1', true)} href="#">Lorem ipsum dolor</a> sit amet, consectetur adipiscing elit. In hendrerit massa non porta ultricies. Ut tristique commodo dolor vel ullamcorper. Vestibulum eu facilisis tellus, vel tincidunt nunc. Nullam facilisis justo sem, at imperdiet velit imperdiet pulvinar.</p>
          <p>Donec ut scelerisque quam. Donec lectus lorem, porta sit amet odio ac, convallis tincidunt dolor. Nunc vel vulputate odio. In diam neque, vulputate eget faucibus hendrerit, finibus sed est. Nulla efficitur ex eu sem hendrerit, nec feugiat arcu ornare. Proin iaculis ut magna quis elementum.</p>
        </Content>
        <Footer />
      </div>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;
