import React, { Component } from 'react';
import { Jumbotron, Container, Display4 } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <Display4>Fluid jumbotron</Display4>
          <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    )
  }
}
