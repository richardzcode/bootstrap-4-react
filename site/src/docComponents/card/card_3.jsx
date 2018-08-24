import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Subtitle mb="2" text="muted">Card subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card content.
          </Card.Text>
          <Card.Link href="#">Card link</Card.Link>
          <Card.Link href="#">Another link</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}
