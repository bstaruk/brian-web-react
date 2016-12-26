require('normalize.css/normalize.css');
require('font-awesome/css/font-awesome.css');
require('./assets/scss/app.scss');

import 'core-js/fn/object/assign';
import React from 'react'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact/Contact';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

const App = ({children, location}) => (
  <div>
    <Header />

    <ReactCSSTransitionGroup
      component="div"
      className="app-wrapper"
      transitionName="app"
      transitionAppear={false}
      transitionEnter={true}
      transitionEnterTimeout={500}
      transitionLeave={false}
    >
      {React.cloneElement(children, {
        key: location.pathname
      })}
    </ReactCSSTransitionGroup>

    <Footer />
  </div>
);

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'));
