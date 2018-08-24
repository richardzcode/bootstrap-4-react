import React, { Component } from 'react';
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  InputGroup,
  Form
} from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup mr="2" aria-label="First group">
            <Button secondary>1</Button>
            <Button secondary>2</Button>
            <Button secondary>3</Button>
            <Button secondary>4</Button>
          </ButtonGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Input placeholder="Input group example" aria-label="Input group example"/>
          </InputGroup>
        </ButtonToolbar>

        <div>&nbsp;</div>

        <ButtonToolbar justifyContent="between" aria-label="Toolbar with button groups">
          <ButtonGroup mr="2" aria-label="First group">
            <Button secondary>1</Button>
            <Button secondary>2</Button>
            <Button secondary>3</Button>
            <Button secondary>4</Button>
          </ButtonGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Input placeholder="Input group example" aria-label="Input group example"/>
          </InputGroup>
        </ButtonToolbar>
      </React.Fragment>
    )
  }
}
