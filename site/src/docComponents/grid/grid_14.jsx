import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>First, but unordered</Col>
          <Col order="12">Second, but last</Col>
          <Col order="1">Third, but first</Col>
        </Row>
        <Row>
          <Col order="last">First, but last</Col>
          <Col>Second, but unordered</Col>
          <Col order="first">Third, but first</Col>
        </Row>
      </Container>
    )
  }
}
