import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DepartmentsPage from './components/department/DepartmentsPage';

const App = () => (
  <Fragment>
  <div>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/DepartmentsPage" component={DepartmentsPage} />
    </Switch>

  </div>
  </Fragment>
)

export default App;
