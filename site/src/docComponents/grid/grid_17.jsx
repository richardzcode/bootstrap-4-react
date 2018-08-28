import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="sm-9">
            Level 1: col-sm-9
            <Row>
              <Col col="8 sm-6">Level 2: col-8 col-sm-6</Col>
              <Col col="4 sm-6">Level 2: col-4 col-sm-6</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
