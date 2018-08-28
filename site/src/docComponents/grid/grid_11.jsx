import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="9">col-9</Col>
          <Col col="4">
            col-4<br/>
            Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
          </Col>
          <Col col="6">
            col-6<br/>
            Subsequent columns continue along the new line.
          </Col>
        </Row>
      </Container>
    )
  }
}
