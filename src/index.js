require('normalize.css/normalize.css');
require('font-awesome/css/font-awesome.css');
require('./assets/scss/app.scss');

import 'core-js/fn/object/assign';
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
  </Router>
), document.getElementById('app'));
