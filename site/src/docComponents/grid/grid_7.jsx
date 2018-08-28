import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Col col="12 md-8">col-12 col-md-8</Col>
          <Col col="6 md-4">col-6 col-md-4</Col>
        </Row>
        <Row>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Col col="col-6 md-4">col-6 col-md-4</Col>
          <Col col="col-6 md-4">col-6 col-md-4</Col>
          <Col col="col-6 md-4">col-6 col-md-4</Col>
        </Row>
        <Row>
        {/* Columns are always 50% wide, on mobile and desktop */}
          <Col col="6">col-6</Col>
          <Col col="6">col-6</Col>
        </Row>
      </Container>
    )
  }
}
