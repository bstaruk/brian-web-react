import 'core-js/fn/object/assign';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/Main';
import About from './components/About';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));
