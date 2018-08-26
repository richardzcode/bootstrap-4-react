## Dropdown

Toggle contextual overlays for displaying lists of links and more

```
renderComp: dropdown_1
import React, { Component } from 'react';
import { Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Button secondary id="dropdownMenuButton">Dropdown button</Dropdown.Button>
        <Dropdown.Menu aria-labelledby="dropdownMenuButton">
          <Dropdown.Item href="#" active>Action</Dropdown.Item>
          <Dropdown.Item disabled>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
```

### Split button

```
renderComp: dropdown_2
import React, { Component } from 'react';
import { Dropdown, ButtonGroup, Button, BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonGroup>
        <Button primary>Primary</Button>
        <Dropdown.Button primary split><BSpan srOnly>Toggle Dropdown</BSpan></Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item href="#" active>Action</Dropdown.Item>
          <Dropdown.Item disabled>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
    )
  }
}
```

### Directions

Trigger dropdown menus above, to the left, to the right.

```
renderComp: dropdown_3
import React, { Component } from 'react';
import { Dropdown, ButtonGroup, Button, BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonGroup dropup>
          <Dropdown.Button primary>Dropup</Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#" active>Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
        <ButtonGroup dropup>
          <Button primary>Split dropup</Button>
          <Dropdown.Button primary split><BSpan srOnly>Toggle Dropdown</BSpan></Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#" active>Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>

        <ButtonGroup dropleft>
          <Dropdown.Button secondary>Dropleft</Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#" active>Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
        <ButtonGroup dropleft>
          <Button secondary>Split dropleft</Button>
          <Dropdown.Button secondary split><BSpan srOnly>Toggle Dropdown</BSpan></Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#" active>Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>

        <ButtonGroup dropright>
          <Dropdown.Button success>Dropright</Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#" active>Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
        <ButtonGroup dropright>
          <Button success>Split dropright</Button>
          <Dropdown.Button success split><BSpan srOnly>Toggle Dropdown</BSpan></Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#" active>Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
      </React.Fragment>
    )
  }
}
```

### Text items

You can also create non-interactive dropdown items with `<Dropdown.Text>`. Feel free to style further with custom CSS or text utilities.

```
renderComp: dropdown_4
import React, { Component } from 'react';
import { Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Dropdown.Menu style={{ position: 'static', display: 'block' }}>
        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item disabled>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
      </Dropdown.Menu>
    )
  }
}
```

### Active and disabled

Add `active` or `disabled` to `<Dropdown.Item>`

```
renderComp: dropdown_5
import React, { Component } from 'react';
import { Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Dropdown.Menu style={{ position: 'static', display: 'block' }}>
        <Dropdown.Item href="#">Regular link</Dropdown.Item>
        <Dropdown.Item href="#" active>Active link</Dropdown.Item>
        <Dropdown.Item href="#" disabled>Disabled link</Dropdown.Item>
        <Dropdown.Item href="#">Another link</Dropdown.Item>
      </Dropdown.Menu>
    )
  }
}
```

### Headers, dividers

```
renderComp: dropdown_6
import React, { Component } from 'react';
import { Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Dropdown.Menu style={{ position: 'static', display: 'block' }}>
        <Dropdown.Header>Dropdown header</Dropdown.Header>
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </Dropdown.Menu>
    )
  }
}
```
