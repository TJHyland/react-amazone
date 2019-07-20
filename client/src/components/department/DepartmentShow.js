import React from 'react';
import axios from 'axios';
import ProductList from '../product/ProductList';
import ProductHero from '../hero/ProductHero'

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
      </>
    )
  }
}

export default DepartmentShow;