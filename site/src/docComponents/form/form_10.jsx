import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Form.CustomSelect lg mb="3">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.CustomSelect>
        <Form.CustomSelect mb="3">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.CustomSelect>
        <Form.CustomSelect sm mb="3">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.CustomSelect>
      </div>
    )
  }
}
