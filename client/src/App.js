import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/shared/Footer';
import DepartmentsPage from './components/department/DepartmentsPage';
import DepartmentShow from './components/department/DepartmentShow';
import ProductShow from './components/product/ProductShow';

const App = () => (
  <Fragment>
  <div>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/DepartmentsPage" component={DepartmentsPage} />
    <Route exact path="/Department/:id" component={DepartmentShow} />
    <Route exact path="/Product/:id" component={ProductShow} />
    </Switch>

  </div>
  <Footer />
  </Fragment>
)

export default App;
