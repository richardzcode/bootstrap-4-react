import React, { Component } from 'react';
import { Card, Nav, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Card text="center">
          <Card.Header>
            <Nav cardHeaderTabs>
              <Nav.ItemLink active href="#">Active</Nav.ItemLink>
              <Nav.ItemLink href="#">Link</Nav.ItemLink>
              <Nav.ItemLink disabled href="#">Disabled</Nav.ItemLink>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button primary>Go somewhere</Button>
          </Card.Body>
        </Card>

        <div>&nbsp;</div>

        <Card text="center">
          <Card.Header>
            <Nav cardHeaderPills>
              <Nav.ItemLink active href="#">Active</Nav.ItemLink>
              <Nav.ItemLink href="#">Link</Nav.ItemLink>
              <Nav.ItemLink disabled href="#">Disabled</Nav.ItemLink>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button primary>Go somewhere</Button>
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}
