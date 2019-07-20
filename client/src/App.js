import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DepartmentsPage from './components/department/DepartmentsPage';
import DepartmentShow from './components/department/DepartmentShow';

const App = () => (
  <Fragment>
  <div>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/DepartmentsPage" component={DepartmentsPage} />
    <Route exact path="/Department/:id" component={DepartmentShow} />
    </Switch>

  </div>
  </Fragment>
)

export default App;
