import React, { Component } from 'react';
import { Card, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Card text="center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button primary>Go somewhere</Button>
        </Card.Body>
        <Card.Footer text="muted">2 days ago</Card.Footer>
      </Card>
    )
  }
}
