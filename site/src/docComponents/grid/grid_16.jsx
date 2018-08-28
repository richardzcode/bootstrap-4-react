import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="md-4">col-md-4</Col>
          <Col col="md-4" ml="auto">col-md-4 ml-auto</Col>
        </Row>
        <Row>
          <Col col="md-3" ml="md-auto">col-md-3 ml-md-auto</Col>
          <Col col="md-3" ml="md-auto">col-md-3 ml-md-auto</Col>
        </Row>
        <Row>
          <Col col="auto" mr="auto">col-auto mr-auto</Col>
          <Col col="auto">col-auto</Col>
        </Row>
      </Container>
    )
  }
}
