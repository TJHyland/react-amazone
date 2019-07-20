import React from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'



const Footer = () => (
  <Segment inverted vertical style={{ padding: '4em 1em' }}>
    <Container>
      <Grid divided inverted stackable>
      <Grid.Row>
        <Grid.Column width={7}>
          <Header inverted as='h4' content='Contact Us' />
          <List link inverted>
            <List.Item as='a'>blueberrymuffins@noyb.com</List.Item>
            <List.Item as='a'>123-321-4567</List.Item>
            <List.Item as='a'>P.O. Box 000000</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={9}>
          <Header as='h4' inverted>
            Terms | Privacy Policy
          </Header>
          <p>
            © BLUEBERRY MUFFFINS 2019
          </p>
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer;