import React, { Component } from 'react';
import { ListGroup, Badge } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item display="flex" justifyContent="between">
          Cras justo odio
          <Badge primary pill>14</Badge>
        </ListGroup.Item>
        <ListGroup.Item display="flex" justifyContent="between">
          Dapibus ac facilisis in
          <Badge primary pill>2</Badge>
        </ListGroup.Item>
        <ListGroup.Item display="flex" justifyContent="between">
          Morbi leo risus
          <Badge primary pill>1</Badge>
        </ListGroup.Item>
      </ListGroup>
    )
  }
}
