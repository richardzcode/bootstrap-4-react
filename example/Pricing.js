import React, { Component } from 'react';
import {
  Nav,
  Button,
  Display4,
  Lead,
  Container,
  Row,
  Col,
  Card,
  List,
  BDiv,
  BH4,
  BH5,
  BSmall,
  BFooter,
  BImg,
  BA
} from 'bootstrap-4-react';

const style = {
  header: {
    maxWidth: '700px'
  }
}

const Menu = props => (
  <BDiv
    display="flex"
    flex="column md-row"
    alignItems="center"
    p="3"
    px="md-4"
    mb="3"
    bg="white"
    border="bottom"
    shadow="sm"
  >
    <BH5 my="0" mr="md-auto" fontWeight="normal">Company name</BH5>
    <Nav my="2 md-0" mr="md-3">
      <Nav.Item><Nav.Link p="2" text="dark" href="#">Features</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link p="2" text="dark" href="#">Enterprise</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link p="2" text="dark" href="#">Support</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link p="2" text="dark" href="#">Pricing</Nav.Link></Nav.Item>
    </Nav>
    <Button primary outline>Sign up</Button>
  </BDiv>
)

const Intro = props => (
  <BDiv px="3" py="3" pt="md-5" pb="md-4" mx="auto" text="center" style={style.header}>
    <Display4>Pricing</Display4>
    <Lead>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It&#39;s built with default Bootstrap components and utilities with little customization.</Lead>
  </BDiv>
)

const Pricing = props => (
  <Card.Deck mb="3" text="center">
    <Card mb="4" shadow="sm">
      <Card.Header>
        <BH4 my="0" fontWeight="normal">Free</BH4>
      </Card.Header>
      <Card.Body>
        <Card.Title as="h1">$0 <BSmall text="muted">/ mo</BSmall></Card.Title>
        <List unstyled mt="3" mb="4">
          <List.Item>10 users included</List.Item>
          <List.Item>2 GB of storage</List.Item>
          <List.Item>Email support</List.Item>
          <List.Item>Help center access</List.Item>
        </List>
        <Button block lg primary outline>Sign up for free</Button>
      </Card.Body>
    </Card>
    <Card mb="4" shadow="sm">
      <Card.Header>
        <BH4 my="0" fontWeight="normal">Pro</BH4>
      </Card.Header>
      <Card.Body>
        <Card.Title as="h1">$15 <BSmall text="muted">/ mo</BSmall></Card.Title>
        <List unstyled mt="3" mb="4">
          <List.Item>20 users included</List.Item>
          <List.Item>10 GB of storage</List.Item>
          <List.Item>Priority email support</List.Item>
          <List.Item>Help center access</List.Item>
        </List>
        <Button block lg primary>Get started</Button>
      </Card.Body>
    </Card>
    <Card mb="4" shadow="sm">
      <Card.Header>
        <BH4 my="0" fontWeight="normal">Enterprise</BH4>
      </Card.Header>
      <Card.Body>
        <Card.Title as="h1">$29 <BSmall text="muted">/ mo</BSmall></Card.Title>
        <List unstyled mt="3" mb="4">
          <List.Item>30 users included</List.Item>
          <List.Item>15 GB of storage</List.Item>
          <List.Item>Phone and email support</List.Item>
          <List.Item>Help center access</List.Item>
        </List>
        <Button block lg primary>Contact us</Button>
      </Card.Body>
    </Card>
  </Card.Deck>
)

const Footer = props => (
  <BFooter pt="4 md-5" my="md-5" border="top">
    <Row>
      <Col col="12 md">
        <BImg
          mb="2"
          src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
          width="24"
          height="24"
        />
        <BSmall display="block" mb="3" text="muted">&copy; 2017-2018</BSmall>
      </Col>
      <Col col="6 md">
        <BH5>Features</BH5>
        <List unstyled text="small">
          <List.Item><BA text="muted" href="#">Cool stuff</BA></List.Item>
          <List.Item><BA text="muted" href="#">Random feature</BA></List.Item>
          <List.Item><BA text="muted" href="#">Team feature</BA></List.Item>
          <List.Item><BA text="muted" href="#">Stuff for developers</BA></List.Item>
          <List.Item><BA text="muted" href="#">Another one</BA></List.Item>
          <List.Item><BA text="muted" href="#">Last time</BA></List.Item>
        </List>
      </Col>
      <Col col="6 md">
        <BH5>Resources</BH5>
        <List unstyled text="small">
          <List.Item><BA text="muted" href="#">Resource</BA></List.Item>
          <List.Item><BA text="muted" href="#">Resource name</BA></List.Item>
          <List.Item><BA text="muted" href="#">Another resource</BA></List.Item>
          <List.Item><BA text="muted" href="#">Final resource</BA></List.Item>
        </List>
      </Col>
      <Col col="6 md">
        <BH5>About</BH5>
        <List unstyled text="small">
          <List.Item><BA text="muted" href="#">Team</BA></List.Item>
          <List.Item><BA text="muted" href="#">Locations</BA></List.Item>
          <List.Item><BA text="muted" href="#">Privacy</BA></List.Item>
          <List.Item><BA text="muted" href="#">Terms</BA></List.Item>
        </List>
      </Col>
    </Row>
  </BFooter>
)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Intro />
        <Container>
          <Pricing />
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
