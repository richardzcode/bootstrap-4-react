import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Display4,
  Lead,
  Button,
  List,
  BNav,
  BA,
  BDiv,
  BSvg,
  BSmall
} from 'bootstrap-4-react';

const style = {
  siteHeader: {
    backgroundColor: 'rgba(0, 0, 0, .85)',
    a: {
      color: '#999'
    }
  },
  product: {
    overflow: 'hidden',
    device: {
      position: 'absolute',
      right: '10%',
      bottom: '-30%',
      width: '300px',
      height: '540px',
      backgroundColor: '#333',
      borderRadius: '21px',
      transform: 'rotate(30deg)',
      '::before': {
        position: 'absolute',
        top: '10%',
        right: '10px',
        bottom: '10%',
        left: '10px',
        backgroundColor: 'rgba(255, 255, 255, .1)',
        borderRadius: '5px'
      }
    }
  },
  headline: {
    flex: '1',
    device: {
      width: '80%',
      height: '300px',
      borderRadius: '21px 21px 0 0'
    }
  }
}

style.product.device2 = Object.assign({}, style.product.device, {
  top: '-25%',
  right: 'auto',
  bottom: '0',
  left: '5%',
  backgroundColor: '#e5e5e5'
});

const Logo = props => (
  <BSvg display="block" mb="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
    <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
    <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
    <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
    <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
    <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
  </BSvg>
)

const MenuItem = props => (
  <BA py="2" display="none md-inline-block" href="#" style={style.siteHeader.a}>
    {props.children}
  </BA>
)

const Menu = props => (
  <BNav sticky="top" py="1" style={style.siteHeader}>
    <Container display="flex" flex="column md-row" justifyContent="between">
      <BA py="2" href="#" style={style.siteHeader.a}>
        <Logo />
      </BA>
      <MenuItem>Tour</MenuItem>
      <MenuItem>Product</MenuItem>
      <MenuItem>Features</MenuItem>
      <MenuItem>Enterprise</MenuItem>
      <MenuItem>Support</MenuItem>
      <MenuItem>Pricing</MenuItem>
      <MenuItem>Cart</MenuItem>
    </Container>
  </BNav>
)

const Product = props => (
  <BDiv position="relative" style={style.product} p="3 md-5" m="md-3" text="center" bg="light">
    <Col col="md-5" p="lg-5" mx="auto" my="5">
      <Display4 fontWeight="normal">Punny headline</Display4>
      <Lead fontWeight="normal">
        And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple marketing pages.
      </Lead>
      <Button as="a" href="#" outline secondary>Coming soon</Button>
    </Col>
    <BDiv shadow="sm" display="none md-block" style={style.product.device}>
      <div style={style.product.device['::before']}></div>
    </BDiv>
    <BDiv shadow="sm" display="none md-block" style={style.product.device2}>
      <div style={style.product.device['::before']}></div>
    </BDiv>
  </BDiv>
)

const Headline = props => (
  <BDiv bg={props.bg} mr="md-3" pt="3 md-5" px="3 md-5" text={props.text} overflow="hidden" style={style.headline}>
    <BDiv my="3" py="3">
      <h2>Another headline</h2>
      <Lead>And an even wittier subheading.</Lead>
      <BDiv bg={props.device.bg} shadow="sm" mx="auto" style={style.headline.device} />
    </BDiv>
  </BDiv>
)

const Headlines = props => (
  <React.Fragment>
    <BDiv display="md-flex" w="100" my="md-3" pl="md-3">
      <Headline bg="dark" text="center white" device={{ bg: "light" }} />
      <Headline bg="light" text="center" device={{ bg: "dark" }} />
    </BDiv>
    <BDiv display="md-flex" w="100" my="md-3" pl="md-3">
      <Headline bg="light" text="center" device={{ bg: "dark" }} />
      <Headline bg="primary" text="center white" device={{ bg: "light" }} />
    </BDiv>
    <BDiv display="md-flex" w="100" my="md-3" pl="md-3">
      <Headline bg="light" text="center" device={{ bg: "white" }} />
      <Headline bg="light" text="center" device={{ bg: "white" }} />
    </BDiv>
    <BDiv display="md-flex" w="100" my="md-3" pl="md-3">
      <Headline bg="light" text="center" device={{ bg: "white" }} />
      <Headline bg="light" text="center" device={{ bg: "white" }} />
    </BDiv>
  </React.Fragment>
)

const Footer = props => (
  <Container as="footer" py="5">
    <Row>
      <Col col="12 md">
        <Logo />
        <BSmall display="block" mb="3" text="muted">&copy; 2017-2018</BSmall>
      </Col>
      <Col col="6 md">
        <h5>Features</h5>
        <List unstyled>
          <List.Item><BA text="muted" href="#">Cool stuff</BA></List.Item>
          <List.Item><BA text="muted" href="#">Random feature</BA></List.Item>
          <List.Item><BA text="muted" href="#">Team feature</BA></List.Item>
          <List.Item><BA text="muted" href="#">Stuff for developers</BA></List.Item>
          <List.Item><BA text="muted" href="#">Another one</BA></List.Item>
          <List.Item><BA text="muted" href="#">Last time</BA></List.Item>
        </List>
      </Col>
      <Col col="6 md">
        <h5>Resources</h5>
        <List unstyled>
          <List.Item><BA text="muted" href="#">Resource</BA></List.Item>
          <List.Item><BA text="muted" href="#">Resource name</BA></List.Item>
          <List.Item><BA text="muted" href="#">Another resource</BA></List.Item>
          <List.Item><BA text="muted" href="#">Final resource</BA></List.Item>
        </List>
      </Col>
      <Col col="6 md">
        <h5>Resources</h5>
        <List unstyled>
          <List.Item><BA text="muted" href="#">Business</BA></List.Item>
          <List.Item><BA text="muted" href="#">Education</BA></List.Item>
          <List.Item><BA text="muted" href="#">Government</BA></List.Item>
          <List.Item><BA text="muted" href="#">Gaming</BA></List.Item>
        </List>
      </Col>
      <Col col="6 md">
        <h5>About</h5>
        <List unstyled>
          <List.Item><BA text="muted" href="#">Team</BA></List.Item>
          <List.Item><BA text="muted" href="#">Locations</BA></List.Item>
          <List.Item><BA text="muted" href="#">Privacy</BA></List.Item>
          <List.Item><BA text="muted" href="#">Terms</BA></List.Item>
        </List>
      </Col>
    </Row>
  </Container>
)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Product />
        <Headlines />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
