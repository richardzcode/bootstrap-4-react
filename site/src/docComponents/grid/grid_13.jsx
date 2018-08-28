import React, { Component } from 'react';
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="6 sm-4">col-6 col-sm-4</Col>
          <Col col="6 sm-4">col-6 col-sm-4</Col>

          {/* Force next columns to break to new line at md breakpoint and up */}
          <BDiv w="100" display="none md-block"></BDiv>

          <Col col="6 sm-4">col-6 col-sm-4</Col>
          <Col col="6 sm-4">col-6 col-sm-4</Col>
        </Row>
      </Container>
    )
  }
}
