import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/shared/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import DepartmentsPage from './components/department/DepartmentsPage';
import DepartmentShow from './components/department/DepartmentShow';
import ProductShow from './components/product/ProductShow';

const App = () => (
  <Fragment>
    <Navbar />
  <div>
    <FetchUser>
      <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path='/login' component={Login} />
       <Route exact path='/register' component={Register} />
       <Route component={NoMatch} />
       <Route exact path="/DepartmentsPage" component={DepartmentsPage} />
       <Route exact path="/Department/:id" component={DepartmentShow} />
       <Route exact path="/Product/:id" component={ProductShow} />
     </Switch>
    </FetchUser>
  </div>
  <Footer />
  </Fragment>
)

export default App;
