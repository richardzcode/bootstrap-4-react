import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row noGutters>
          <Col col="12 sm-6 md-8">col-12 col-sm-6 col-md-8</Col>
          <Col col="6 md-4">col-6 col-md-4</Col>
        </Row>
      </Container>
    )
  }
}
