import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router';
import Content from '../Content/Content';
import {Overlay, OverlayLink} from '../Overlay';

class HomeComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      activeOverlay: null
    };
    this._handleOverlayOpen = this._handleOverlayOpen.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  _handleOverlayOpen(overlayId) {
    this.setState({
      activeOverlay: overlayId ? overlayId : null
    });
  }

  _handleOverlayClose() {
    this.setState({
      activeOverlay: null
    });
  }

  render() {
    const {activeOverlay} = this.state;
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
        desc: 'I have made dozens of sites with WordPress and it is still my go-to when I need to make a website with a CMS for a friend or small business. I have expert-level knowledge of crafting plugins and themes, as well as system buildouts and maintenance. I even maintain [my own development theme (Starbase)](https://github.com/bstaruk/wordpress-starbase) that features NPM, Bower & SCSS integration with a modified [_s](https://underscores.me) base.'
      }
    ];
    return (
      <Content>
        {skillsOfAnArtist.map((skill, index) =>
          <Overlay key={index} active={activeOverlay === skill.id} closeOverlay={this._handleOverlayClose}>
            <h3>{skill.title}</h3>
            <ReactMarkdown
              source={skill.desc}
              renderers={{Link: props => <a href={props.href} target="_blank">{props.children}</a>}}
            />
          </Overlay>
        )}
        <h2 className="content-title">Welcome!</h2>
        <p>My name is Brian Staruk and I am a web developer who lives in Boston, MA and currently specializes in front-end & app development. I think that everyone should have their own little corner of the internet, and this one is mine!</p>
        <p>...and it was built with <OverlayLink openOverlay={this._handleOverlayOpen} overlayId="skillOverlayReact">React</OverlayLink>! Check out <a href="https://github.com/bstaruk/brian-web-react" target="_blank" className="alt icon-after external">the GitHub repo</a>.</p>
        <p><em>A little about me:</em> I've been building websites with <OverlayLink openOverlay={this._handleOverlayOpen} overlayId="skillOverlayHTML">HTML, (S)CSS & JS</OverlayLink> for almost 2 decades, and in a past life I was a <OverlayLink openOverlay={this._handleOverlayOpen} overlayId="skillOverlayLAMP">LAMP/WordPress</OverlayLink> developer... but these days I am <Link to="/experiments" className="purp">experimenting</Link> with (and having an absolute blast with) modern Javascript frameworks & libraries such as <OverlayLink openOverlay={this._handleOverlayOpen} overlayId="skillOverlayAngular">AngularJS</OverlayLink> and <OverlayLink openOverlay={this._handleOverlayOpen} overlayId="skillOverlayReact">React</OverlayLink>.</p>
        <p>View my resume at <a href="http://resume.brian.staruk.me" target="_blank" className="alt icon-after external">resume.brian.staruk.me</a> if you'd like to learn more about what I've been up to.</p>
      </Content>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;
