import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Form.CustomFile id="customFile1">
        Choose file
      </Form.CustomFile>
    )
  }
}
