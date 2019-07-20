import React, { Component } from 'react';
import { Button, Form, Segment, Header, Select } from 'semantic-ui-react';
import axios from 'axios';
import { CrudConsumer } from '../../providers/CrudProvider';

// put this form in the admin course show page http://localhost:3000/admin-lessons

class ProductForm extends React.Component {
  state = { name: '', description: '', price: '', stock: ''}

  componentDidMount() {
    if (this.props.id)
      this.setState({ 
        id: this.props.id,
        name: this.props.name,
        description: this.props.description, 
        price: this.props.price,
        stock: this.props.stock,
        complete: this.props.complete,
        })
    this.setState({ course_id: this.props.product_id })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.lesson.updateProduct(this.state)
    } else {
      this.props.lesson.addProduct(this.state);
    }
    this.setState({ name: '', description: '', price: '', stock: '' });
    }

  render() {
    const { name, description, price, stock, complete, product_id } = this.state
  
    return(
     
      <Segment basic>
        <Header as='h1' textAlign='center'>Product</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            autoFocus
            required         
            name='name'
            value={name}
            placeholder='Name'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Description"
            autoFocus
            required         
            name='description'
            value={description}
            placeholder='Description'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Price"
            autoFocus
            required         
            name='price'
            value={price}
            placeholder='Price'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Stock"
            autoFocus
            required         
            name='stock'
            value={stock}
            placeholder='Stock'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    
    )
  }
}

const completeOptions = [
  { key: "t", text: "True", value: true }, 
  { key: "f", text: "False", value: false }
]

export default class ConnectedProductForm extends Component {
  render() {
    return (
      <CrudConsumer>
        { department => <ProductForm { ...this.props} department={department} />}
      </CrudConsumer>
    )
  }
}