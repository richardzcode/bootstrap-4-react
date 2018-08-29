import React, { Component } from 'react';
import { InputGroup, Form, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.PrependText>Upload</InputGroup.PrependText>
          <Form.CustomFile>Choose file</Form.CustomFile>
        </InputGroup>
        <InputGroup mb="3">
          <Form.CustomFile>Choose file</Form.CustomFile>
          <InputGroup.AppendText>Upload</InputGroup.AppendText>
        </InputGroup>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <Button outline secondary>Button</Button>
          </InputGroup.Prepend>
          <Form.CustomFile>Choose file</Form.CustomFile>
        </InputGroup>
        <InputGroup mb="3">
          <Form.CustomFile>Choose file</Form.CustomFile>
          <InputGroup.Append>
            <Button outline secondary>Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
