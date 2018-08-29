import React, { Component } from 'react';
import { InputGroup, Form, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.PrependText>Options</InputGroup.PrependText>
          <Form.CustomSelect>
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.CustomSelect>
        </InputGroup>
        <InputGroup mb="3">
          <Form.CustomSelect>
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.CustomSelect>
          <InputGroup.AppendText>Options</InputGroup.AppendText>
        </InputGroup>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <Button outline secondary>Button</Button>
          </InputGroup.Prepend>
          <Form.CustomSelect>
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.CustomSelect>
        </InputGroup>
        <InputGroup mb="3">
          <Form.CustomSelect>
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.CustomSelect>
          <InputGroup.Append>
            <Button outline secondary>Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
