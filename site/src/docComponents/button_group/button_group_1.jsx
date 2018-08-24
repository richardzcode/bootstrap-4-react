import React, { Component } from 'react';
import { ButtonGroup, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonGroup aria-label="Basic example">
        <Button secondary>Left</Button>
        <Button secondary>Middle</Button>
        <Button secondary>Right</Button>
      </ButtonGroup>
    )
  }
}
