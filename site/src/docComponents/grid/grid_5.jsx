import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row justifyContent="md-center">
          <Col col="col lg-2">1 of 3</Col>
          <Col col="col md-auto">Variable width content</Col>
          <Col col="col lg-2">3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col col="col md-auto">Variable width content</Col>
          <Col col="col lg-2">3 of 3</Col>
        </Row>
      </Container>
    )
  }
}
