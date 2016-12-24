import React from 'react';
import ReactMarkdown from 'react-markdown';
import Content from '../../Components/Content/Content';
import Overlay from '../../Components/Overlay/Overlay';

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
    const skillsOfAnArtist = [
      {
        id: 'skillOverlayReact',
        title: 'React',
        desc: '*:breathing intensifies:*\n\nI\'m falling for React. We don\'t go way back, but we\'re solid and it doesn\'t matter what they say about us anyways. React is my new go-to for just about everything front-end and it\'s been a long time since I was so happy to throw myself onto a new code bandwagon.'
      },
      {
        id: 'skillOverlayAngular',
        title: 'AngularJS',
        desc: 'Though I prefer working with React, I still think AngularJS is just swell and I\'ve enjoyed my time with it. A side project of mine, [PriceBTC.com](http://pricebtc.com) was built with AngularJS when I was just getting started with modern JS frameworks.'
      },
      {
        id: 'skillOverlayHTML',
        title: 'HTML, (S)CSS & JS',
        desc: 'I\'ve been building websites since I was in middle school and have always had an appreciation for clean, logical code. Having been around since the days of marquee tags, tables and wrestling with IE6, I have observed and adapted to the growth of these technologies since their humble beginnings.'
      },
      {
        id: 'skillOverlayLAMP',
        title: 'LAMP & WordPress',
        desc: 'I have made dozens of sites with WordPress and it is still my go-to when I want to make a basic website for a friend or small business. I have expert-level knowledge of crafting plugins and themes, as well as system buildouts and maintenance. I even maintain [my own development theme (Starbase)](https://github.com/bstaruk/wordpress-starbase) that features NPM, Bower & SCSS integration with a modified [_s](https://underscores.me) core.'
      }
    ];
    return (
      <Content>
        {skillsOfAnArtist.map(function (skill, index) {
          return (
            <Overlay key={index} id={skill.id} active={this.state.activeOverlay === skill.id} onToggle={this.handleOverlayToggle.bind(this)}>
              <h3>{skill.title}</h3>
              <ReactMarkdown
                source={skill.desc}
                renderers={{Link: props => <a href={props.href} target="_blank">{props.children}</a>}}
              />
            </Overlay>
          );
        }, this)}
        <h2 className="content-title">Welcome!</h2>
        <p>My name is Brian Staruk and I am a web developer who lives in Boston, MA and currently specializes in front-end & app development. I think that everyone should have their own little corner of the internet, and this one is mine!</p>
        <p>...and it was built with <a onClick={this.handleOverlayToggle.bind(this, 'skillOverlayReact', true)} href="#">React</a>!</p>
        <p><strong><em>A little about me...</em></strong> I've been building websites with <a onClick={this.handleOverlayToggle.bind(this, 'skillOverlayHTML', true)} href="#">HTML, (S)CSS & JS</a> for almost 2 decades, and in a past life I was a <a onClick={this.handleOverlayToggle.bind(this, 'skillOverlayLAMP', true)} href="#">LAMP (WordPress)</a> developer... but these days I am basking in the warm, rejuvenating sun that are modern MVC Javascript frameworks such as <a onClick={this.handleOverlayToggle.bind(this, 'skillOverlayAngular', true)} href="#">AngularJS</a> and <a onClick={this.handleOverlayToggle.bind(this, 'skillOverlayReact', true)} href="#">React</a>.</p>
        <p>Check out my resume at <a href="http://resume.brian.staruk.me" target="_blank" className="external">resume.brian.staruk.me</a> if you'd like to learn more about what I've been up to.</p>
      </Content>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;
