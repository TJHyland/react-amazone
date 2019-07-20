import React, { Component } from 'react';
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class DepartmentForm extends React.Component {
  state = { title: ''}

  componentDidMount() {
    if (this.props.currentDepartment)
      this.setState({ title: this.props.currentDepartment.title})
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.currentDepartment) {
      this.props.course.updateDepartment(this.state)
    } 
    else {
    this.props.course.addDepartment(this.state);
    }
    this.setState({ title: ''});
    
    }


  render() {
    const { title} = this.state
  
    return(
     
      <Segment basic>
        <Header as='h1' textAlign='center'>Course</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Title"
            autoFocus
            required         
            name='title'
            value={title}
            placeholder='Title'
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

// export default CourseForm;

export default class ConnectedDepartmentForm extends Component {
  render() {
    return (
      <DepartmentConsumer>
        { department => <DepartmentForm { ...this.props } department={department} />}
      </DepartmentConsumer>
    )
  }
}