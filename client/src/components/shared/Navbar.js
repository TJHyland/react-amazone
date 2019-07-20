import React from 'react'
import { Link } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Item,
  Menu,
} from 'semantic-ui-react'
import { AuthConsumer, } from '../../providers/AuthProvider'
import { Link, withRouter, } from 'react-router-dom'

const Navbar = () => (

  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header style={{
          fontFamily: 'Georgia'
        }}>
          AMAZONE
        </Menu.Item>
        <Menu.Item as={ Link } name='home' to='/'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>Department</Dropdown.Item>
            <Dropdown.Item>CRUD</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item position='right' as={ Link } name='login' to='/login'>
          Login/Logout
        </Menu.Item>

        
      </Container>
    </Menu>
  </div>
)
    export default Navbar;