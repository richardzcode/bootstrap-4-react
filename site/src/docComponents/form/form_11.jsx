import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor="customRange1">Example range</label>
        <Form.CustomRange id="customRange1" />
      </div>
    )
  }
}
