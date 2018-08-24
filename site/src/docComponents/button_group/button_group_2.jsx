import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup mr="2" aria-label="First group">
          <Button secondary>1</Button>
          <Button secondary>2</Button>
          <Button secondary>3</Button>
          <Button secondary>4</Button>
        </ButtonGroup>
        <ButtonGroup mr="2" aria-label="Second group">
          <Button secondary>5</Button>
          <Button secondary>6</Button>
          <Button secondary>7</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button secondary>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}
