import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Form.Input lg placeholder="Large" />
        <Form.Input placeholder="Default input" />
        <Form.Input sm placeholder="Small" />
        <Form.Select lg>
          <option>Large select</option>
        </Form.Select>
        <Form.Select>
          <option>Default select</option>
        </Form.Select>
        <Form.Select sm>
          <option>Small select</option>
        </Form.Select>
      </React.Fragment>
    )
  }
}
