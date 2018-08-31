## Navbar

Bootstrap powerful, responsive navigation header. Includes support for branding, navigation, and more, including support for our collapse plugin.

Here is an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.

```
renderComp: navbar_1
import React, { Component } from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
          Navbar
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
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
          </Navbar.Nav>
          <Form inline my="2 lg-0">
            <Form.Input type="search" placeholder="Search" mr="sm-2" />
            <Button outline success my="2 sm-0">Search</Button>
          </Form>
        </Collapse>
      </Navbar>
    )
  }
}
```

### Brand

Adding images to the `<Navbar.Brand>` will likely always require custom styles or utilities to properly size.

```
renderComp: navbar_2
import React, { Component } from 'react';
import { Navbar, BImg } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const bootstrap_icon = 'https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg';

    return (
      <Navbar light bg="light">
        <Navbar.Brand href="#">
          <BImg
            src={bootstrap_icon}
            width="30"
            height="30"
            display="inline-block"
            align="top"
            mr="1"
          />
          Bootstrap
        </Navbar.Brand>
      </Navbar>
    )
  }
}
```

### Nav

Navbar navigation links build on `<Nav>` options with their own modifier and require the use of `<Navbar.Toggler>` for proper responsive styling. Navigation in navbars will also grow to occupy as much horizontal space as possible to keep your navbar contents securely aligned.

```
renderComp: navbar_3
import React, { Component } from 'react';
import { Navbar, Nav, Collapse, Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggler target="#navbarNav" />
        <Collapse navbar id="navbarNav">
          <Navbar.Nav>
            <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
            <Nav.ItemLink href="#">Features</Nav.ItemLink>
            <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Dropdown</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
            <Nav.ItemLink disabled>Disabled</Nav.ItemLink>
          </Navbar.Nav>
        </Collapse>
      </Navbar>
    )
  }
}
```

### Forms

Place various form controls and components within a navbar with `<Form inline>`. Immediate children elements in `<Navbar>` use flex layout and will default to `justifyContent="between"`. Use additional flex utilities as needed to adjust this behavior.

```
renderComp: navbar_4
import React, { Component } from 'react';
import { Navbar, Form, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Navbar light bg="light">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Form inline my="2 lg-0">
          <Form.Input type="search" placeholder="Search" mr="sm-2" />
          <Button outline success my="2 sm-0">Search</Button>
        </Form>
      </Navbar>
    )
  }
}
```

### Text

Navbars may contain bits of text with the help of `<Navbar.Text>`. This component adjusts vertical alignment and horizontal spacing for strings of text.

```
renderComp: navbar_5
import React, { Component } from 'react';
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">Navbar w/ text</Navbar.Brand>
        <Navbar.Toggler target="#navbarText" />
        <Collapse navbar id="navbarText">
          <Navbar.Nav mr="auto">
            <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
            <Nav.ItemLink href="#">Features</Nav.ItemLink>
            <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
          </Navbar.Nav>
          <Navbar.Text>Navbar text with an inline element</Navbar.Text>
        </Collapse>
      </Navbar>
    )
  }
}
```

### Color schemes

Theming the navbar has never been easier thanks to the combination of theming modifiers and background-color utilities.

```
renderComp: navbar_6
import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, Collapse } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar expand="lg" dark bg="dark" mb="3">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggler target="#navbarColor1" />
          <Collapse navbar id="navbarColor1">
            <Navbar.Nav mr="auto">
              <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
              <Nav.ItemLink href="#">Features</Nav.ItemLink>
              <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
              <Nav.ItemLink href="#">About</Nav.ItemLink>
            </Navbar.Nav>
            <Form inline my="2 lg-0">
              <Form.Input type="search" placeholder="Search" mr="sm-2" />
              <Button outline info my="2 sm-0">Search</Button>
            </Form>
          </Collapse>
        </Navbar>
        <Navbar expand="lg" dark bg="primary" mb="3">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggler target="#navbarColor2" />
          <Collapse navbar id="navbarColor2">
            <Navbar.Nav mr="auto">
              <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
              <Nav.ItemLink href="#">Features</Nav.ItemLink>
              <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
              <Nav.ItemLink href="#">About</Nav.ItemLink>
            </Navbar.Nav>
            <Form inline my="2 lg-0">
              <Form.Input type="search" placeholder="Search" mr="sm-2" />
              <Button outline light my="2 sm-0">Search</Button>
            </Form>
          </Collapse>
        </Navbar>
        <Navbar expand="lg" light style={{ backgroundColor: '#e3f2fd' }} mb="3">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggler target="#navbarColor3" />
          <Collapse navbar id="navbarColor3">
            <Navbar.Nav mr="auto">
              <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
              <Nav.ItemLink href="#">Features</Nav.ItemLink>
              <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
              <Nav.ItemLink href="#">About</Nav.ItemLink>
            </Navbar.Nav>
            <Form inline my="2 lg-0">
              <Form.Input type="search" placeholder="Search" mr="sm-2" />
              <Button outline primary my="2 sm-0">Search</Button>
            </Form>
          </Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}
```

### Placement

Use position utilities to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there).

#### Fixed

```
renderComp: navbar_7
import React, { Component } from 'react';
import { Navbar } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div style={{height:"10rem"}}>
        <Navbar light bg="light" fixed="top" mb="3">
          <Navbar.Brand href="#">Fixed top</Navbar.Brand>
        </Navbar>
        <Navbar light bg="light" fixed="bottom" mb="3">
          <Navbar.Brand href="#">Fixed bottom</Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}
```

#### Sticky

```
renderComp: navbar_8
import React, { Component } from 'react';
import { Navbar } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div style={{height:"10rem"}}>
        <Navbar light bg="light" sticky="top" mb="3">
          <Navbar.Brand href="#">Sticky top</Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}
```

### External content

Sometimes you want to use the collapse plugin to trigger hidden content elsewhere on the page. Because our plugin works on the id and data-target matching, that is easily done!

```
renderComp: navbar_9
import React, { Component } from 'react';
import { Navbar, Collapse, BDiv, BH5, BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Collapse id="navbarToggleExternalContent">
          <BDiv bg="dark" p="4">
            <BH5 text="white">Collapsed content</BH5>
            <BSpan text="muted">Toggleable via the navbar brand.</BSpan>
          </BDiv>
        </Collapse>
        <Navbar dark bg="dark">
          <Navbar.Toggler target="#navbarToggleExternalContent" />
        </Navbar>
      </div>
    )
  }
}
```
