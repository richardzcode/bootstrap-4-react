# bootstrap-4-react

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/bootstrap-4-react.svg)](https://badge.fury.io/js/bootstrap-4-react)
[![npm downloads](https://img.shields.io/npm/dm/bootstrap-4-react.svg)](https://www.npmjs.com/package/bootstrap-4-react)
[![GitHub last commit](https://img.shields.io/github/last-commit/richardzcode/bootstrap-4-react.svg)]()

Bootstrap 4 React components.

The goal of this library is to simplify common usages of Bootstrap 4 in React. Developers can always fall back to Bootstrap original syntaxes for advanced cases.

## Installation

```
npm install --save bootstrap-4-react
```

## Components

- [Alert](#alert)
- [Badge](#badge)
- [Blockquote](#blockquote)
- [Button](#button)
- [ButtonGroup](#buttongroup)
- [Card](#card)
- [Carousel](#carousel)
- [Collapse](#collapse)
- [Display](#display)
- [Dropdown](#dropdown)
- [Figure](#figure)
- [Form](#form)
- [InputGroup](#inputgroup)
- [Jumbotron](#jumbotron)
- [Lead](#lead)
- [ListGroup](#listgroup)
- [Modal](#modal)
- [Nav](#nav)
- [Navbar](#navbar)

### Alert

```
import React, { Component } from 'react';
import { Alert } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Alert primary>Primary Alert</Alert>
        <Alert secondary>Secondary Alert</Alert>
      </div>
    )
  }
}
```

### Badge

```
import React, { Component } from 'react';
import { Badge, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Badge primary>Primary</Badge>
        <Button primary>
          Profile <Badge light>9</Badge>
        </Button>
      </div>
    )
  }
}
```

### Blockquote

```
import React, { Component } from 'react';
import { Blockquote } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Blockquote>
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <Blockquote.Footer>Someone famous in <cite title="Source Title">Source Title</cite></Blockquote.Footer>
      </Blockquote>
    )
  }
}
```

### Button

```
import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary>Primary</Button>
        <Button secondary outline>Secondary</Button>
        <Button success size="lg">Success</Button>
        <Button danger block>Danger</Button>
      </div>
    )
  }
}
```

### ButtonGroup

```
import React, { Component } from 'react';
import { ButtonGroup, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button secondary>1</Button>
          <Button secondary>2</Button>
          <Button secondary>3</Button>
        </ButtonGroup>
        <ButtonGroup vertical size="sm">
          <Button secondary>1</Button>
          <Button secondary>2</Button>
          <Button secondary>3</Button>
        </ButtonGroup>
      </div>
    )
  }
}
```

### Card

```
import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Header>Feature</Card.Header>
        <Card.Image src="https://github.com/fluidicon.png" />
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

### Carousel

```
import React, { Component } from 'react';
import { Carousel, BImg } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Carousel id="carouselExample" w="50" fade>
        <Carousel.Indicators>
          <Carousel.Indicator target="#carouselExample" to="0" active />
          <Carousel.Indicator target="#carouselExample" to="1" />
          <Carousel.Indicator target="#carouselExample" to="2" />
        </Carousel.Indicators>
        <Carousel.Inner>
          <Carousel.Item active>
            <BImg display="block" w="100" src="https://static.npmjs.com/images/avatars/Avatar1.svg"/>
            <Carousel.Caption style={{ background: 'orange' }}><h5>One</h5></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <BImg display="block" w="100" src="https://static.npmjs.com/images/avatars/Avatar2.svg"/>
            <Carousel.Caption style={{ background: 'orange' }}><h5>Two</h5></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <BImg display="block" w="100" src="https://static.npmjs.com/images/avatars/Avatar4.svg"/>
            <Carousel.Caption style={{ background: 'orange' }}><h5>Three</h5></Carousel.Caption>
          </Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev href="#carouselExample">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#carouselExample">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
    )
  }
}
```

### Collapse

```
import React, { Component } from 'react';
import { Collapse, Button, Card } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary data-toggle="collapse" data-target="#collapseExample">Toggle Collapse</Button>
          <Collapse id="collapseExample">
            <Card>
              <Card.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </Card.Body>
            </Card>
          </Collapse>
      </div>
    )
  }
}
```

### Display

```
import React, { Component } from 'react';
import { Display1, Display2, Display3, Display4 } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Display1>Display 1</Display1>
        <Display2>Display 2</Display2>
        <Display3>Display 3</Display3>
        <Display4>Display 4</Display4>
      </div>
    )
  }
}
```

### Dropdown

```
import React, { Component } from 'react';
import { Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Dropdown dropleft>
        <Dropdown.Button secondary size="lg">Dropdown button</Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item href="#" active>Action</Dropdown.Item>
          <Dropdown.Item disabled>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.ItemText>Text</Dropdown.ItemText>
          <Dropdown.Divider />
          <Dropdown.Header>Dropdown header</Dropdown.Header>
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
```

### Figure

```
import React, { Component } from 'react';
import { Figure } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Figure>
        <Figure.Image src="https://github.com/fluidicon.png" />
        <Figure.Caption text="right">A caption for above image</Figure.Caption>
      </Figure>
    )
  }
}
```

### Form

```
import React, { Component } from 'react';
import { Form, Button, BLabel } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Form m="5">
          <Form.Group>
            <label htmlFor="exampleInputEmail">Email Address</label>
            <Form.Input lg type="email" id="exampleInputEmail" />
            <Form.Text text="muted"><small>We'll never share your email with anyone else.</small></Form.Text>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword">Password</label>
            <Form.Input type="password" id="exampleInputPassword" />
          </Form.Group>
          <Form.Group>
            <Form.Input type="text" readonly="readonly" />
          </Form.Group>
          <Form.Group>
            <label htmlFor="staticEmail">Email</label>
            <Form.PlainText id="staticEmail" value="email@example.com" />
          </Form.Group>
          <Form.Check>
            <Form.CheckInput type="checkbox" id="exampleCheck" />
            <label htmlFor="exampleCheck">Check me out</label>
          </Form.Check>
          <Form.Group>
            <label htmlFor="exampleSelect">Example select</label>
            <Form.Select lg id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleSelectMultiple">Example select multiple</label>
            <Form.Select id="exampleSelectMultiple" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleTextarea">Example textarea</label>
            <Form.Textarea id="exampleTextarea" valid={true} />
            <Form.Feedback>Invalid feedback</Form.Feedback>
            <Form.Feedback valid={true}>Valid feedback</Form.Feedback>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleRange">Example Range</label>
            <Form.Range id="exampleRange" />
          </Form.Group>
          <Form.Check>
            <Form.CheckInput type="checkbox" noLabel />
          </Form.Check>
          <Form.Check>
            <Form.CheckInput type="radio" noLabel />
          </Form.Check>
          <Button type="submit" primary>Submit</Button>
        </Form>

        <Form inline>
          <Form.Group mb="2">
            <BLabel srOnly>Email</BLabel>
            <Form.PlainText value="email@example.com" />
          </Form.Group>
          <Form.Group>
            <BLabel srOnly>Password</BLabel>
            <Form.Input type="password" placeholder="Password" />
          </Form.Group>
          <Button type="submit" primary>Submit</Button>
        </Form>
      </div>
    )
  }
}
```

### InputGroup

```
import React, { Component } from 'react';
import { InputGroup } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup sm>
          <InputGroup.Prepend><InputGroup.Text>Small</InputGroup.Text></InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend><InputGroup.Text>@</InputGroup.Text></InputGroup.Prepend>
          <Form.Input type="text" placeholder="Username" />
        </InputGroup>
        <InputGroup lg>
          <Form.Input type="text" placeholder="Recipient's username" />
          <InputGroup.Append>
            <InputGroup.Text>@example.com</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text><input type="checkbox" /></InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>First and last name</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" aria-label="First name" />
          <Form.Input type="text" aria-label="Last name" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
      </div>
    )
  }
}
```

### Jumbotron

```
import React, { Component } from 'react';
import { Jumbotron, Display4, Lead, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Jumbotron>
        <Display4>Hello, world</Display4>
        <Lead>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</Lead>
        <hr className="my-4" />
        <Button primary size="lg">Learn more</Button>
      </Jumbotron>
    )
  }
}
```

### Lead

```
import React, { Component } from 'react';
import { Lead } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Lead>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Lead>
    )
  }
}
```

### ListGroup

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

### Modal

```
import React, { Component } from 'react';
import { Modal, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Modal id="exampleModal" fade>
          <Modal.Dialog centered>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
                Woohoo
              </Modal.Body>
              <Modal.Footer>
                <Button secondary data-dismiss="modal">Close</Button>
                <Button primary>Save changes</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>
        <Button primary data-toggle="modal" data-target="#exampleModal">Launch modal</Button>
      </div>
    )
  }
}
```

### Nav

```
import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav pills justified>
        <Nav.Item>
          <Nav.Link active href="#">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" disabled>Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}
```

### Navbar

```
import React, { Component } from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse, BImg } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Navbar expand="sm" light bg="light">
        <Navbar.Brand href="#">
          <BImg src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" height="30" width="30" display="inline-block" align="top" />
          Bootstrap
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav>
            <Nav.Item active>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Dropdown</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link disabled>Disabled</Nav.Link>
            </Nav.Item>
            <Form inline>
              <Form.Input placeholder="Search" />
              <Button outline success mx="0 md-2">Search</Button>
            </Form>
          </Navbar.Nav>
          <Navbar.Text>Navbar text</Navbar.Text>
        </Collapse>
      </Navbar>
    )
  }
}
```
