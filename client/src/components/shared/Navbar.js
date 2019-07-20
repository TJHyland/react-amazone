import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Item,
  Menu,
} from 'semantic-ui-react'
import { AuthConsumer, } from '../../providers/AuthProvider'

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
            <Dropdown.Item as={ Link } name='departments' to='/departmentspage'>Department</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          <Menu.Item position='right' as={ Link } name='login' to='/login'>
            Login
          </Menu.Item>
      </Container>
    </Menu>
  </div>
)
    export default Navbar;