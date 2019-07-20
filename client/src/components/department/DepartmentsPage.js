import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DepartmentList from './DepartmentList';

class DepartmentPage extends React.Component {

  state = { departments: [], loaded: false }
  
  setLoaded = () => {
    this.setState({ loaded: true })
  }

  componentDidMount(){
    axios.get(`/api/departments`)
    .then( res => {
      this.setState({ departments: res.data })
      this.setLoaded()
    })
    .catch ( err => {
      console.log(err)
    })
  }

  render() {
    const { loaded } = this.state
    const {departments} = this.state
    if(loaded)
    return (
      <>
        <Link to={{pathname: '/'}}>Home</Link>
        
        <h1>All Departments</h1>
        <ul>
        {departments.map ( department => <DepartmentList key={department.id} {...department} />)}
        </ul>
      </>
    )

    else
      return(
        <h1>Loading...</h1>
      )
  }
}
 
export default DepartmentPage;