## Nav

The base `<Nav>` component is built with flexbox and provide a strong foundation for building all types of navigation components.

```
renderComp: nav_1
import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav>
        <Nav.Item>
          <Nav.Link active href="#">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
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

Render `<ul>` like above, or render say a `<nav>` element. Because the `.nav` class uses `display: flex`, the nav links behave the same as nav items would, but without the extra markup.

```
renderComp: nav_2
import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav as="nav">
        <Nav.Link active href="#">Active</Nav.Link>
        <Nav.Link href="#">Link</Nav.Link>
        <Nav.Link href="#">Link</Nav.Link>
        <Nav.Link href="#" disabled>Disabled</Nav.Link>
      </Nav>
    )
  }
}
```

### Horizontal alignment

Change the horizontal alignment of your nav with flexbox utilities.

```
renderComp: nav_3
import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav justifyContent="center">
        <Nav.ItemLink active href="#">Active</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
      </Nav>
    )
  }
}
```

### Vertical

Stack your navigation by changing the flex item direction with `flex="column"`

```
renderComp: nav_4
import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav flex="column">
        <Nav.ItemLink active href="#">Active</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
      </Nav>
    )
  }
}
```

### Tabs

Takes the basic nav from above and adds the `tabs` modifier to generate a tabbed interface.

```
renderComp: nav_5
import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav tabs>
        <Nav.ItemLink active href="#">Active</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
      </Nav>
    )
  }
}
```

### Pill

Take the same component, but use `pills` instead.

```
renderComp: nav_6
import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav pills>
        <Nav.ItemLink active href="#">Active</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
      </Nav>
    )
  }
}
```

### Fill and justify

Force your `<Nav>` contents to extend the full available width one of two modifiers. To proportionately fill all available space with your `<Nav.Item>`s, use `fill`. Notice that all horizontal space is occupied, but not every nav item has the same width.

```
renderComp: nav_7
import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav pills fill>
        <Nav.ItemLink active href="#">Active</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
      </Nav>
    )
  }
}
```

For equal-width elements, use `justified`. All horizontal space will be occupied by nav links, but unlike the `fill` above, every nav item will be the same width.

```
renderComp: nav_8
import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav pills justified>
        <Nav.ItemLink active href="#">Active</Nav.ItemLink>
        <Nav.ItemLink href="#">Longer nav link</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
      </Nav>
    )
  }
}
```

### Working with flex utilities

In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.

```
renderComp: nav_9
import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav pills flex="column sm-row">
        <Nav.ItemLink active href="#">Active</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
      </Nav>
    )
  }
}
```

### Using dropdowns

```
renderComp: nav_10
import React, { Component } from 'react';
import { Nav, Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav pills flex="column sm-row">
        <Nav.ItemLink active href="#">Active</Nav.ItemLink>
        <Nav.Item dropdown>
          <Nav.Link href="#" dropdownToggle>Dropdown</Nav.Link>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Nav.Item>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
      </Nav>
    )
  }
}
```

### Tabs

Use the tab JavaScript plugin to extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus.

```
renderComp: nav_11
import React, { Component } from 'react';
import { Nav, Tab } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav tabs role="tablist">
          <Nav.ItemLink active href="#home" id="home-tab" data-toggle="tab" aria-selected="true">
            Home
          </Nav.ItemLink>
          <Nav.ItemLink href="#profile" id="profile-tab" data-toggle="tab" aria-selected="false">
            Profile
          </Nav.ItemLink>
          <Nav.ItemLink href="#contact" id="contact-tab" data-toggle="tab" aria-selected="false">
            Contact
          </Nav.ItemLink>
        </Nav>
        <Tab.Content>
          <Tab.Pane id="home" aria-labelledby="home-tab" show active>
            Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
          </Tab.Pane>
          <Tab.Pane id="profile" aria-labelledby="profile-tab">
            Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.
          </Tab.Pane>
          <Tab.Pane id="contact" aria-labelledby="contact-tab">
            Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.
          </Tab.Pane>
        </Tab.Content>
      </React.Fragment>
    )
  }
}
```
