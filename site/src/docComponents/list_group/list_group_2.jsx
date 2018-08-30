import React, { Component } from 'react';
import { ListGroup } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <ListGroup mb="3">
          <ListGroup.Link href="#" active>Cras justo odio</ListGroup.Link>
          <ListGroup.Link href="#" disabled>Dapibus ac facilisis in</ListGroup.Link>
          <ListGroup.Link href="#">Morbi leo risus</ListGroup.Link>
          <ListGroup.Link href="#">Porta ac consectetur ac</ListGroup.Link>
          <ListGroup.Link href="#">Vestibulum at eros</ListGroup.Link>
        </ListGroup>
        <ListGroup>
          <ListGroup.Button active>Cras justo odio</ListGroup.Button>
          <ListGroup.Button disabled>Dapibus ac facilisis in</ListGroup.Button>
          <ListGroup.Button>Morbi leo risus</ListGroup.Button>
          <ListGroup.Button>Porta ac consectetur ac</ListGroup.Button>
          <ListGroup.Button>Vestibulum at eros</ListGroup.Button>
        </ListGroup>
      </div>
    )
  }
}
