## ListGroup

```
import React, { Component } from 'react';
import { ListGroup } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ListGroup flush>
        <ListGroup.Item active>Cras justo odio</ListGroup.Item>
        <ListGroup.Item disabled>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Link href="#">Morbi leo risus</ListGroup.Link>
        <ListGroup.Button>Porta ac consectetur ac</ListGroup.Button>
        <ListGroup.Item primary>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    )
  }
}
```
