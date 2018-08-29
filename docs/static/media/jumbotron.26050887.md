## Jumbotron

A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.

```
renderComp: jumbotron_1
import React, { Component } from 'react';
import { Jumbotron, Display4, Lead, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Jumbotron>
        <Display4>Hello, world</Display4>
        <Lead>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</Lead>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <Button primary lg>Learn more</Button>
      </Jumbotron>
    )
  }
}
```

To make the jumbotron full width, and without rounded corners, add the `fluid` modifier and add a `<Container>` within.

```
renderComp: jumbotron_2
import React, { Component } from 'react';
import { Jumbotron, Container, Display4 } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <Display4>Fluid jumbotron</Display4>
          <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    )
  }
}
```
