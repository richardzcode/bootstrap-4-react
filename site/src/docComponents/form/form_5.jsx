import React, { Component } from 'react';
import { Form, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Row>
            <Form.LabelCol col="sm-2" htmlFor="staticEmail">Email</Form.LabelCol>
            <Col col="sm-10">
              <Form.PlainText value="email@example.com"></Form.PlainText>
            </Col>
          </Row>
          <Row>
            <Form.LabelCol col="sm-2" htmlFor="inputPassword">Password</Form.LabelCol>
            <Col col="sm-10">
              <Form.Input type="password" placeholder="Password" id="inputPassword" />
            </Col>
          </Row>
        </Form.Group>
      </Form>
    )
  }
}
