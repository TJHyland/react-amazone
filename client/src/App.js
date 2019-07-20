import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/shared/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';


const App = () => (
  <Fragment>
  <div>
    <FetchUser>
      <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path='/login' component={Login} />
       <Route exact path='/register' component={Register} />
       <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </div>
  </Fragment>
)

export default App;
