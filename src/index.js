import 'core-js/fn/object/assign';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

require('./assets/scss/app.scss');

import Home from './views/Home/Home';
import About from './views/About/About';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));
