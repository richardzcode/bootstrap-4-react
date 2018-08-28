import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="sm-8">col-sm-8</Col>
          <Col col="sm-4">col-sm-4</Col>
        </Row>
        <Row>
          <Col col="sm">col-sm</Col>
          <Col col="sm">col-sm</Col>
          <Col col="sm">col-sm</Col>
        </Row>
      </Container>
    )
  }
}
