import React, { Component } from 'react';
import { ButtonGroup, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonGroup display="flex" mb="2" lg aria-label="Basic example">
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
        <ButtonGroup display="flex" mb="2" aria-label="Basic example">
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
        <ButtonGroup display="flex" sm aria-label="Basic example">
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
      </React.Fragment>
    )
  }
}
