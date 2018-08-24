## ButtonGroup

Wrap a series of `<Button>` with `<ButtonGroup>`

```
renderComp:button_group_1
import React, { Component } from 'react';
import { ButtonGroup, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonGroup aria-label="Basic example">
        <Button secondary>Left</Button>
        <Button secondary>Middle</Button>
        <Button secondary>Right</Button>
      </ButtonGroup>
    )
  }
}
```

### Button toolbar

> #### Ensure correct component and provide a label
> In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, you would use `ButtonGroup`, while toolbars should use `ButtonToolbar`.
>
> In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use `aria-label`, but alternatives such as `aria-labelledby` can also be used.

```
renderComp:button_group_2
import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup mr="2" aria-label="First group">
          <Button secondary>1</Button>
          <Button secondary>2</Button>
          <Button secondary>3</Button>
          <Button secondary>4</Button>
        </ButtonGroup>
        <ButtonGroup mr="2" aria-label="Second group">
          <Button secondary>5</Button>
          <Button secondary>6</Button>
          <Button secondary>7</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button secondary>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}
```

Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly.

```
renderComp:button_group_3
import React, { Component } from 'react';
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  InputGroup,
  Form
} from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup mr="2" aria-label="First group">
            <Button secondary>1</Button>
            <Button secondary>2</Button>
            <Button secondary>3</Button>
            <Button secondary>4</Button>
          </ButtonGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Input placeholder="Input group example" aria-label="Input group example"/>
          </InputGroup>
        </ButtonToolbar>

        <div>&nbsp;</div>

        <ButtonToolbar justifyContent="between" aria-label="Toolbar with button groups">
          <ButtonGroup mr="2" aria-label="First group">
            <Button secondary>1</Button>
            <Button secondary>2</Button>
            <Button secondary>3</Button>
            <Button secondary>4</Button>
          </ButtonGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Input placeholder="Input group example" aria-label="Input group example"/>
          </InputGroup>
        </ButtonToolbar>
      </React.Fragment>
    )
  }
}
```

### Sizing

Instead of applying sizing to every button in a group, just add sizing to each `ButtonGroup`

```
renderComp:button_group_4
import React, { Component } from 'react';
import { ButtonGroup, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonGroup display="flex" mb="2" lg aria-label="Basic example">
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
        <ButtonGroup display="flex" mb="2" aria-label="Basic example">
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
        <ButtonGroup display="flex" sm aria-label="Basic example">
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
      </React.Fragment>
    )
  }
}
```

### Nesting

Place `<ButtonGroup>` within another `<ButtonGrouop>` when you want dropdown menus mixed with a series of buttons.

```
renderComp:button_group_5
import React, { Component } from 'react';
import { ButtonGroup, Button, Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonGroup aria-label="Button group with nested dropdown">
        <Button secondary>1</Button>
        <Button secondary>2</Button>
        <ButtonGroup>
          <Button secondary dropdownToggle id="btnGroupDrop1">
            Dropdown
          </Button>
          <Dropdown.Menu aria-labelledby="btnGroupDrop1">
            <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
            <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
      </ButtonGroup>
    )
  }
}
```

### Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally.

```
renderComp:button_group_6
import React, { Component } from 'react';
import { ButtonGroup, Button, Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonGroup vertical aria-label="Vertical example">
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
        </ButtonGroup>

        <div>&nbsp;</div>

        <ButtonGroup vertical aria-label="Button group with nested dropdown">
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <ButtonGroup>
            <Button secondary dropdownToggle id="btnGroupDrop1">
              Dropdown
            </Button>
            <Dropdown.Menu aria-labelledby="btnGroupDrop1">
              <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
              <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
            </Dropdown.Menu>
          </ButtonGroup>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <ButtonGroup>
            <Button secondary dropdownToggle id="btnGroupDrop2">
              Dropdown
            </Button>
            <Dropdown.Menu aria-labelledby="btnGroupDrop2">
              <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
              <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
            </Dropdown.Menu>
          </ButtonGroup>
        </ButtonGroup>
      </React.Fragment>
    )
  }
}
```
