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
          <p>Fusce ut tincidunt enim. Suspendisse a volutpat enim. Duis venenatis pellentesque sapien at commodo. Phasellus eleifend, purus et lacinia tempor, turpis eros semper lacus, eu fermentum odio eros ut tortor. Pellentesque porta augue ut mi iaculis luctus. Proin eget ultrices risus.</p>
          <p>Sed id nulla magna. Mauris quis efficitur quam, vel molestie massa. In at ipsum in arcu aliquet blandit. Vestibulum nec imperdiet ipsum. Donec eget tempus nisi, ut tempus lacus. In quis pellentesque leo. Suspendisse consequat sodales orci quis tincidunt. Quisque sed auctor eros. Integer malesuada leo sit amet turpis ornare vulputate.</p>
        </Content>
        <Footer />
      </div>
    );
  }
}

AboutComponent.defaultProps = {
};

export default AboutComponent;
