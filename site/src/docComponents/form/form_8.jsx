import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Form.CustomCheckbox id="customCheck1">
          Check this custom checkbox
        </Form.CustomCheckbox>
        <Form.CustomCheckbox id="customCheck2" disabled>
          Check this custom checkbox
        </Form.CustomCheckbox>
      </div>
    )
  }
}
