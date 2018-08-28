import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const rowStyle = {
      height: '10rem',
      backgroundColor: 'rgba(255,0,0,.1)',
      marginTop: '1rem'
    };

    return (
      <Container>
        <Row style={rowStyle} alignItems="start">
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
        </Row>
        <Row style={rowStyle} alignItems="center">
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
        </Row>
        <Row style={rowStyle} alignItems="end">
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
        </Row>
        <Row style={rowStyle}>
          <Col alignSelf="start">One of three columns</Col>
          <Col alignSelf="center">One of three columns</Col>
          <Col alignSelf="end">One of three columns</Col>
        </Row>
      </Container>
    )
  }
}
