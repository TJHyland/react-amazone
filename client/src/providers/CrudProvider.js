import React, { Component } from 'react';
import axios from 'axios';

const CrudContext = React.createContext();

export const CrudConsumer = CrudContext.Consumer;

export class CrudProvider extends Component {

  state = { departments: [], products: [] }

  componentDidMount() {
    axios.get('/api/departments')
    .then( res => {
      this.setState({ departments: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }

  updateDepartment = (department) => {
    const {id} = department
    axios.put(`/api/departments/${id}`, department)
    .then(res => {
      const departments = this.state.departments.map( c => {
        if (c.id === id)
          return res.data
          return c
      })
      this.setState({ departments })
      window.location.href = '/DepartmentsPage'
    })
  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
    .then( res => {
      const { departments } = this.state
      this.setState({ departments: departments.filter( c => c.id !== id )})
      window.location.href = '/DepartmentsPage'
    })
  }

  addDepartment = (department) => {
    axios.post('/api/departments', { department })
    .then( res => {
      const { departments } =this.state
      this.setState({ departments: [...departments, res.data] })
      window.location.href = '/DepartmentsPage'
    })
  }

  addProduct = (product) => {
    axios.post(`/api/departments/${product.department_id}/products`, { product } )
    .then( res => {
      const {products } = this.state
      this.setState({ products: [...products, res.data] })
      window.location.href = '/DepartmentsPage'
    })
    .catch( err => {
      console.log(err)
    })
  }

  deleteProduct = (departmentId, id) => {
    axios.delete(`/api/departments/${departmentId}/products/${id}`)
    .then( res => {
      const { products } = this.state
      this.setState({ products: products.filter( c => c.id !== id )})
      window.location.href = '/DepartmentsPage'
    })
  }

  updateProduct = (product) => {
    const { id, department_id } = product
    axios.put(`/api/departments/${department_id}/products/${id}`, product)
    .then( res => {
      const product = this.state.products.map ( c => {
        if (c.id === id)
          return res.data
          return c
      })
      this.setState({ product })
      window.location.href = '/DepartmentsPage'
    })
  }

  render() {
    return (
      <CrudContext.Provider value={{
        ...this.state,
        updateDepartment: this.updateDepartment,
        deleteDepartment: this.deleteDepartment,
        addDepartment: this.addDepartment,
        updateProduct: this.updateProduct,
        deleteProduct: this.deleteProduct,
        addProduct: this.addProduct
      }}>
        { this.props.children }
      </CrudContext.Provider>
    )
  }
}