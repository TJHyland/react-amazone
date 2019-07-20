import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

  render(){
    return(
      <>
      <h1>This is the home page</h1>
      <h3>Add links to:</h3>
      <ul>
        <li>Departments</li>
        <li>Users?</li>
      </ul>
      </>
    )
  }
}

export default Home;