require('normalize.css/normalize.css');
require('font-awesome/css/font-awesome.css');
require('./assets/scss/app.scss');

import 'core-js/fn/object/assign';
import React from 'react'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

const App = ({ children, location }) => (
  <div className="wrapper">
    <Header />

    <ReactCSSTransitionGroup
      component="div"
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
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
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('app'));
