import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import DepartmentsPage from './components/department/DepartmentsPage';
import DepartmentShow from './components/department/DepartmentShow';

const App = () => (
  <Fragment>
    <Navbar />
  <div>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/DepartmentsPage" component={DepartmentsPage} />
    <Route exact path="/Department/:id" component={DepartmentShow} />
    </Switch>

  </div>
  <Footer />
  </Fragment>
)

export default App;
