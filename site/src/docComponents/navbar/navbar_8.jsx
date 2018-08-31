import React, { Component } from 'react';
import { Navbar } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div style={{height:"10rem"}}>
        <Navbar light bg="light" sticky="top" mb="3">
          <Navbar.Brand href="#">Sticky top</Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}
