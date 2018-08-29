import React, { Component } from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" aria-label="Dollar amount (with dot and two decimal places)" />
        </InputGroup>
        <InputGroup mb="3">
          <Form.Input type="text" aria-label="Dollar amount (with dot and two decimal places)" />
          <InputGroup.Append>
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
