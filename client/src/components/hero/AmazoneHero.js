import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react'
import hero from './ah.png';

const styles = {
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,

  }
}

const AmazoneHero = () => (
  <div text style={styles.hero} >

    <Header as='h1' inverted style={{
      fontSize: '10em',
      padding: '40px',
      position: 'centered'
    }}>
      Amazone
    </Header>

  </div>
)

export default AmazoneHero;