import React from 'react';
import ProductHero from '../hero/ProductHero'

class ProductShow extends React.Component {

  render() {
    const { id, name, description, price, stock, department_id } = this.props.location.state
    return(
      <>
        <ProductHero />
        <h1>Product show page for {name}</h1>
        <p>item name: {name}</p>
        <p>description: {description}</p>
        <p>price: ${price}</p>
        <p>stock: {stock}</p>
      </>
    )
  }

}

export default ProductShow;