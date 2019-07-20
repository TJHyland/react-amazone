import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ id, name, description, price, stock, department_id }) => (
  <>
    <li><Link to={{ pathname: `../product/${id}`, state: { id, name, description, price, stock, department_id } }} >{ name } price: ${ price } stock: { stock }</Link></li>
  </>
)

export default ProductList;