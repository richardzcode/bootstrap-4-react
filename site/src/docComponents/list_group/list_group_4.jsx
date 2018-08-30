import React, { Component } from 'react';
import { ListGroup } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item primary>A simple primary list group item</ListGroup.Item>
        <ListGroup.Item secondary>A simple secondary list group item</ListGroup.Item>
        <ListGroup.Item success>A simple success list group item</ListGroup.Item>
        <ListGroup.Item danger>A simple danger list group item</ListGroup.Item>
        <ListGroup.Item warning>A simple warning list group item</ListGroup.Item>
        <ListGroup.Item info>A simple info list group item</ListGroup.Item>
        <ListGroup.Item light>A simple light list group item</ListGroup.Item>
        <ListGroup.Item dark>A simple dark list group item</ListGroup.Item>
      </ListGroup>
    )
  }
}
