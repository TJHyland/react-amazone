import React from 'react';
import axios from 'axios';
import ProductList from '../product/ProductList';

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
      <h1>Individual department page for { title }</h1>

      <h1>All Products</h1>
      <ul>
        {
          products.map( product => <ProductList key={product.id} {...product} /> )
        }
      </ul>
      </>
    )
  }
}

export default DepartmentShow;