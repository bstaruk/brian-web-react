import React from 'react';
import Header from '../../Components/Header/Header';
import Content from '../../Components/Content/Content';
import Overlay from '../../Components/Overlay/Overlay';
import Footer from '../../Components/Footer/Footer';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Content>
          <Overlay title="Test Overlay" active={true}>
            <p>test</p>
          </Overlay>
          <h2 className="content-title">Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit massa non porta ultricies. Ut tristique commodo dolor vel ullamcorper. Vestibulum eu facilisis tellus, vel tincidunt nunc. Nullam facilisis justo sem, at imperdiet velit imperdiet pulvinar.</p>
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
