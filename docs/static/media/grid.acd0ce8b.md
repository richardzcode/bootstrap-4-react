## Grid

```
import React, { Component } from 'react';
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col border>One of two</Col>
          <Col border>One of two</Col>
        </Row>
        <Row>
          <Col border>One of three</Col>
          <Col border>One of three</Col>
          <Col border>One of three</Col>
        </Row>
        <Row>
          <Col border>Column</Col>
          <Col border>Column</Col>
          <BDiv w="100"></BDiv>
          <Col border>Column</Col>
          <Col border>Column</Col>
        </Row>
        <Row>
          <Col sm="8" border>col-sm-8</Col>
          <Col sm="4" border>col-sm-4</Col>
        </Row>
        <Row>
          <Col col="6 md-3" border>col-6 md-3</Col>
          <Col col="6 md-3" border>col-6 md-3</Col>
          <Col col="6 md-3" border>col-6 md-3</Col>
          <Col col="6 md-3" border>col-6 md-3</Col>
        </Row>
      </Container>
    )
  }
}
```
