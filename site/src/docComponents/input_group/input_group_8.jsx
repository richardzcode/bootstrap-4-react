import React, { Component } from 'react';
import { InputGroup, Dropdown, Form, Button, BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <Button outline secondary>Action</Button>
            <Dropdown.Button outline secondary split>
              <BSpan srOnly>Toggle Dropdown</BSpan>
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup mb="3">
          <Form.Input type="text" />
          <InputGroup.Append>
            <Button outline secondary>Action</Button>
            <Dropdown.Button outline secondary split>
              <BSpan srOnly>Toggle Dropdown</BSpan>
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
