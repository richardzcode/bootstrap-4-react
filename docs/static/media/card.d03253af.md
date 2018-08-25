## Card

```
renderComp:card_1
import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';

const img_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">286X180<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

export default class App extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Header>Feature</Card.Header>
        <Card.Image src={img_src} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Subtitle mb="2" text="muted">Card subtitle</Card.Subtitle>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Footer>
      </Card>
    )
  }
}
```

### Body

Use `<Card.Body>` whenever you need a padded section within a card

```
renderComp: card_2
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
```

### Titles, text, and links

```
renderComp: card_3
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
```

### Images

Add `top` property to an image on the top of the card. Add `bottom` property to an image at the bottom of the card.

```
renderComp: card_4
import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';

const img_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">286X180<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Card display="inline-block" align="top" mr="3" style={{ width: '18rem' }}>
          <Card.Image src={img_src} top/>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card display="inline-block" align="top" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card content.
            </Card.Text>
          </Card.Body>
          <Card.Image src={img_src} bottom/>
        </Card>
      </React.Fragment>
    )
  }
}
```

### List groups

```
renderComp: card_5
import React, { Component } from 'react';
import { Card, ListGroup } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup flush>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}
```

### Kitchen sink

Wrap everything in a fix-widthed card.

```
renderComp: card_6
import React, { Component } from 'react';
import { Card, ListGroup } from 'bootstrap-4-react';

const img_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">286X180<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

export default class App extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Image src={img_src} top/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card content.
          </Card.Text>
        </Card.Body>
        <ListGroup flush>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card link</Card.Link>
          <Card.Link href="#">Another link</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}
```

### Header and footer

```
renderComp: card_7
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
```

### Navigation

Add navigation to a card with `<Nav>` component.

```
renderComp: card_8
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
```

### Image overlays

Turn an image into a card background and overlay your card text.

```
renderComp: card_9
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
```

### Card layout

```
renderComp: card_10
import React, { Component } from 'react';
import { Card, BSmall, Blockquote } from 'bootstrap-4-react';

const img_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">286X180<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h6>Group</h6>
        <Card.Group mb="3">
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
        </Card.Group>

        <h6>Deck</h6>
        <Card.Deck mb="3">
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
        </Card.Deck>

        <h6>Columns</h6>
        <Card.Columns>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card p="3">
            <Card.Body mb="0">
              <Blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                <Blockquote.Footer>
                  <BSmall text="muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </BSmall>
                </Blockquote.Footer>
              </Blockquote>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card bg="primary" text="white center" p="3">
            <Blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              <Blockquote.Footer>
                <BSmall text="muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </BSmall>
              </Blockquote.Footer>
            </Blockquote>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has a regular title and short paragraphy of text below it.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Image src={img_src} />
          </Card>
          <Card p="3" text="right">
            <Blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              <Blockquote.Footer>
                <BSmall text="muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </BSmall>
              </Blockquote.Footer>
            </Blockquote>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
        </Card.Columns>
      </React.Fragment>
    )
  }
}
```
