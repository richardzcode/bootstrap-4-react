import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const rowStyle = {
      marginTop: '1rem'
    };

    return (
      <Container>
        <Row style={rowStyle} justifyContent="start">
          <Col col="4">One of two columns</Col>
          <Col col="4">One of two columns</Col>
        </Row>
        <Row style={rowStyle} justifyContent="center">
          <Col col="4">One of two columns</Col>
          <Col col="4">One of two columns</Col>
        </Row>
        <Row style={rowStyle} justifyContent="end">
          <Col col="4">One of two columns</Col>
          <Col col="4">One of two columns</Col>
        </Row>
        <Row style={rowStyle} justifyContent="around">
          <Col col="4">One of two columns</Col>
          <Col col="4">One of two columns</Col>
        </Row>
        <Row style={rowStyle} justifyContent="between">
          <Col col="4">One of two columns</Col>
          <Col col="4">One of two columns</Col>
        </Row>
      </Container>
    )
  }
}
