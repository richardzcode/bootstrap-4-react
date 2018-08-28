import React, { Component } from 'react';
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Column</Col>
          <Col>Column</Col>
          <BDiv w="100"></BDiv>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
    )
  }
}
