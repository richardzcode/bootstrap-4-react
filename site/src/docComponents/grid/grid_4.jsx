import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col col="6">2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col col="5">2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    )
  }
}
