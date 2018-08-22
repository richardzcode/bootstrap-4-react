import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'bootstrap-4-react';

import Sidebar from './Sidebar';
import Content from './Content';

export default class Documentation extends Component {
  render() {
    const path = this.props.path || '/';

    return (
      <Container fluid>
        <Row flex="xl-nowrap">
          <Col col="12 md-3 xl-2" className="bd-sidebar">
            <Sidebar path={path} />
          </Col>
          <Col col="12 md-9 xl-8" py="md-3" pl="md-5">
            <Content path={path} />
          </Col>
        </Row>
      </Container>
    )
  }
}
