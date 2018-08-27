import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <label htmlFor="formControlsRange">Example Range input</label>
          <Form.Range id="formControlRange" />
        </Form.Group>
      </Form>
    )
  }
}
