import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="sm">One of three columns</Col>
          <Col col="sm">One of three columns</Col>
          <Col col="sm">One of three columns</Col>
        </Row>
      </Container>
    )
  }
}
