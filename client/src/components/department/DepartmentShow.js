import React, { Component } from 'react';
import axios from 'axios';
import ProductList from '../product/ProductList';
import ProductHero from '../hero/ProductHero'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { CrudConsumer } from '../../providers/CrudProvider';


class DepartmentShow extends React.Component {

  state = { products: [] }

  componentDidMount() {
    const { id } = this.props.location.state
    axios.get(`/api/departments/${id}`)
      .then( res => {
        this.setState({ products: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    const { title, id } = this.props.location.state
    const { products } = this.state

    return (
      <>
      <ProductHero />

      <h1 style={{
        fontSize: '4em',
      }}>{title}</h1>
      <ul>
        {
          products.map( product => <ProductList key={product.id} {...product} /> )
        }
      </ul>
      <Button 
          size='small' 
          color="red"
          onClick={()=> this.props.department.deleteDepartment(id)}
        >
          Delete Department
        </Button> 

        <Link to = {{ 
          pathname: '/',
          // Edit department button 
          state: { id, title }
        }} >
          <Button 
            size='small' 
            color="yellow"
            
          >
            Edit Department
          </Button> 
        </Link>

        <Link to = {{ 
          pathname: '/', 
          state: { department_id: id }
        }} >
          <Button 
            size='small' 
            color="green"
            
          >
            Create Product
          </Button> 
        </Link>
      </>
    )
  }
}

export default class ConnectedDepartmenstShow extends Component {
  render() {
    return (
      <CrudConsumer>
        { department => <DepartmentShow { ...this.props} department={department} />}
      </CrudConsumer>
    )
  }
}