import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Text>
            This is some text within a card body.
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
