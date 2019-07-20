import React from 'react'
import {
  Container,
  Dropdown,
  Image,
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
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>Departments</Dropdown.Item>
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
        <Menu.Menu position='right'>
        {/* <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link> */}
        </Menu.Menu>
      </Container>
    </Menu>
  </div>
)
    export default Navbar;