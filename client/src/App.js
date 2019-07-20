import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const App = () => (
  <Fragment>
  <div>
    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>

  </div>
  </Fragment>
)

export default App;
