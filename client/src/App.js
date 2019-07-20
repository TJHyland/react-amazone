import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/shared/Footer';
import DepartmentsPage from './components/department/DepartmentsPage';

const App = () => (
  <Fragment>
  <div>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/DepartmentsPage" component={DepartmentsPage} />
    </Switch>

  </div>
  <Footer />
  </Fragment>
)

export default App;
