import React, { Component } from 'react';
import { Navbar, Collapse, BDiv, BH5, BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Collapse id="navbarToggleExternalContent">
          <BDiv bg="dark" p="4">
            <BH5 text="white">Collapsed content</BH5>
            <BSpan text="muted">Toggleable via the navbar brand.</BSpan>
          </BDiv>
        </Collapse>
        <Navbar dark bg="dark">
          <Navbar.Toggler target="#navbarToggleExternalContent" />
        </Navbar>
      </div>
    )
  }
}
