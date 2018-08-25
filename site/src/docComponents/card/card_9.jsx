import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';

const img_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"457"%20height%3D"270"%20viewBox%3D"0%200%20457%20270"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"457"%20height%3D"270"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">457X270<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

export default class App extends Component {
  render() {
    return (
      <Card bg="dark" text="white">
        <Card.Image src={img_src} />
        <Card.ImageOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>
            Last updated 3 mins ago
          </Card.Text>
        </Card.ImageOverlay>
      </Card>
    )
  }
}
