import React, { Component } from 'react';
import axios from 'axios';

class DepartmentPage extends React.Component {

  state = { departments: [] }

  componentDidMount(){
    axios.get("api/courses")
    .then( res => {
      this.setState({ courses: res.data })
    })
    .catch ( err => {
      console.log(err)
    })
  }

  render() {
    return (
      <>
        <h1>This is the department landing page</h1>
        <h3>Things to add:</h3>
        <ul>
          <li>api calls</li>
          <li>Header?</li>
          <li>list of departments</li>
        </ul>
      </>
    )
  }
}
 
export default DepartmentPage;