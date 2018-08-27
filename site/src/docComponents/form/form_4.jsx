import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Form.Input placeholder="Readonly input here..." readonly />
    )
  }
}
