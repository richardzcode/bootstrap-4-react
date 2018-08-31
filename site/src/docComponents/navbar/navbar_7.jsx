import React, { Component } from 'react';
import { Navbar } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div style={{height:"10rem"}}>
        <Navbar light bg="light" fixed="top" mb="3">
          <Navbar.Brand href="#">Fixed top</Navbar.Brand>
        </Navbar>
        <Navbar light bg="light" fixed="bottom" mb="3">
          <Navbar.Brand href="#">Fixed bottom</Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}
