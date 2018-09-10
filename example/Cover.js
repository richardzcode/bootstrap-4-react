import React, { Component } from 'react';
import {
  Nav,
  Lead,
  Button,
  BDiv,
  BHeader,
  BFooter
} from 'bootstrap-4-react';

import './App.css';
/*
This template requires CSS on html/body/#root to make 100% height work. Please import ./App.css with below content:

html, body, #root {
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #333;
  text-align: center;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}
*/

const style= {
  maxWidth: '42em',
  brand: {
    float: 'left'
  },
  nav: {
    link: {
      marginLeft: '1rem',
      padding: '.25rem 0',
      fontWeight: '700',
      color: 'rgba(255, 255, 255, .5)',
      backgroundColor: 'transparent',
      borderBottom: '.25rem solid transparent'
    }
  },
  main: {
    padding: '0 1.5rem',
  },
  footer: {
    color: 'rgba(255, 255, 255, .5)'
  },
  a: {
    color: '#fff'
  }
}

style.nav.link.active = Object.assign({}, style.nav.link, {
  color: '#fff',
  borderBottomColor: '#fff'
});

const Menu = props => (
  <BHeader mb="auto">
    <h3 style={style.brand}>Cover</h3>
    <Nav justifyContent="center">
      <Nav.Link href="#" style={style.nav.link.active} active>Home</Nav.Link>
      <Nav.Link href="#" style={style.nav.link}>Features</Nav.Link>
      <Nav.Link href="#" style={style.nav.link}>Contact</Nav.Link>
    </Nav>
  </BHeader>
)

const Main = props => (
  <BDiv role="main" style={style.main}>
    <h1>Cover your page.</h1>
    <Lead>
      Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.
    </Lead>
    <Lead>
      <Button as="a" href="#" secondary lg>Learn more</Button>
    </Lead>
  </BDiv>
)

const Footer = props => (
  <BFooter mt="auto" style={style.footer}>
    <p>
      Cover template for <a href="https://getbootstrap.com/" style={style.a}>Bootstrap</a>, by <a href="https://twitter.com/mdo" style={style.a}>@mdo</a>.
    </p>
  </BFooter>
)

class App extends Component {
  render() {
    return (
      <BDiv display="flex" flex="column" w="100" h="100" p="3" mx="auto" style={style}>
        <Menu />
        <Main />
        <Footer />
      </BDiv>
    );
  }
}

export default App;
