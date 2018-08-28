import React, { Component } from 'react';
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="6 sm-3">col-6 col-sm-3</Col>
          <Col col="6 sm-3">col-6 col-sm-3</Col>

          {/* Force next columns to break to new line */}
          <BDiv w="100"></BDiv>

          <Col col="6 sm-3">col-6 col-sm-3</Col>
          <Col col="6 sm-3">col-6 col-sm-3</Col>
        </Row>
      </Container>
    )
  }
}
