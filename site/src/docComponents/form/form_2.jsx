import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <label htmlFor="exampleControlsInput1">Email address</label>
          <Form.Input type="email" id="exampleControlsInput1" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleControlsSelect1">Example select</label>
          <Form.Select id="exampleControlsSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleControlsSelect2">Example select</label>
          <Form.Select id="exampleControlsSelect2" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleControlsTextarea1">Example textarea</label>
          <Form.Textarea id="exampleControlsTextarea1" rows="3"></Form.Textarea>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleControlsFile1">Example file</label>
          <Form.File id="exampleControlsFile1"/>
        </Form.Group>
      </Form>
    )
  }
}
