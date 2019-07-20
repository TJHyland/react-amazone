import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AmazoneHero from './hero/AmazoneHero'

class Home extends Component {

  render() {
    return(
      <>
      <AmazoneHero />
      <h1>This is the home page</h1>
      <h3>Add links to:</h3>
      <ul>
        <li>Departments</li>
        <li>Users?</li>
      </ul>
      <Link to={{pathname: '/DepartmentsPage' }}>Departments</Link>
      </>
    )
  }
}

export default Home;