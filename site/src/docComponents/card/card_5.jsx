import React, { Component } from 'react';
import { Card, ListGroup } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup flush>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}
