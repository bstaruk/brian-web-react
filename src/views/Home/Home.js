import React from 'react';
import Header from '../../Components/Header/Header';
import Content from '../../Components/Content/Content';
import Overlay from '../../Components/Overlay/Overlay';
import Footer from '../../Components/Footer/Footer';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOverlay: null
    };
  }

  handleOverlayToggle(overlayId) {
    const newActiveOverlay = this.state.activeOverlay === overlayId ? null : overlayId;
    this.setState({
      activeOverlay: newActiveOverlay
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Content>
          <Overlay id="testOverlay1" title="Test Overlay 1" active={this.state.activeOverlay === 'testOverlay1'} onToggle={this.handleOverlayToggle.bind(this)}>
            <p>test one</p>
          </Overlay>
          <Overlay id="testOverlay2" title="Test Overlay 2" active={this.state.activeOverlay === 'testOverlay2'} onToggle={this.handleOverlayToggle.bind(this)}>
            <p>test two</p>
          </Overlay>
          <h2 className="content-title">Home</h2>
          <p><a onClick={this.handleOverlayToggle.bind(this, 'testOverlay1', true)} href="#">Lorem ipsum dolor</a> sit amet, consectetur adipiscing elit. In hendrerit massa non porta ultricies. Ut tristique commodo dolor vel ullamcorper. Vestibulum eu facilisis tellus, vel tincidunt nunc. Nullam facilisis justo sem, at imperdiet velit imperdiet pulvinar.</p>
          <p>Donec ut scelerisque quam. <a onClick={this.handleOverlayToggle.bind(this, 'testOverlay2', true)} href="#">Donec lectus lorem, porta sit amet odio ac</a>, convallis tincidunt dolor. Nunc vel vulputate odio. In diam neque, vulputate eget faucibus hendrerit, finibus sed est. Nulla efficitur ex eu sem hendrerit, nec feugiat arcu ornare. Proin iaculis ut magna quis elementum.</p>
        </Content>
        <Footer />
      </div>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;
