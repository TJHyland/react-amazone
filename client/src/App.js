import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/shared/Footer';


const App = () => (
  <Fragment>
  <div>
    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>

  </div>
  <Footer />
  </Fragment>
)

export default App;
