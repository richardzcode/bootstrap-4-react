import React, { Component } from 'react';
import { Navbar, BImg } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const bootstrap_icon = 'https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg';

    return (
      <Navbar light bg="light">
        <Navbar.Brand href="#">
          <BImg
            src={bootstrap_icon}
            width="30"
            height="30"
            display="inline-block"
            align="top"
            mr="1"
          />
          Bootstrap
        </Navbar.Brand>
      </Navbar>
    )
  }
}
