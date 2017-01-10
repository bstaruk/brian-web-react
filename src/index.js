require('normalize.css/normalize.css');
require('font-awesome/css/font-awesome.css');
require('./assets/scss/app.scss');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Home, Contact, Experiments, ExpPokeTable, ExpPokeTableItem, ExpBTCPrice, ExpPassGen, NoMatch} from './components/Views';

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
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="contact" component={Contact} />
      <Route path="experiments">
        <IndexRoute component={Experiments} />
        <Route path="poketable">
          <IndexRoute component={ExpPokeTable} />
          <Route path=":item" component={ExpPokeTableItem} />
        </Route>
        <Route path="btcprice" component={ExpBTCPrice} />
        <Route path="passgen" component={ExpPassGen} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'));
