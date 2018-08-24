## Button

```
renderComp:button_1
import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success</Button>
        <Button danger>Danger</Button>
        <Button warning>Warning</Button>
        <Button info>Info</Button>
        <Button light>Light</Button>
        <Button dark>Dark</Button>
      </div>
    )
  }
}
```

### Button tags

The `Button` is designed to be `<button>` element. However, you can also use it as `<a>` or `<input>`.

```
renderComp:button_2
import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary as="a" href="#">Link</Button>
        <Button primary>Button</Button>
        <Button primary as="input" type="button" value="Input" />
        <Button primary as="input" type="submit" value="Submit" />
        <Button primary as="input" type="reset" value="Reset" />
      </div>
    )
  }
}
```

### Outline buttons

```
renderComp:button_3
import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary outline>Primary</Button>
        <Button secondary outline>Secondary</Button>
        <Button success outline>Success</Button>
        <Button danger outline>Danger</Button>
        <Button warning outline>Warning</Button>
        <Button info outline>Info</Button>
        <Button light outline>Light</Button>
        <Button dark outline>Dark</Button>
      </div>
    )
  }
}
```

### Sizes

Larger and smaller buttons

```
renderComp:button_4
import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary lg>Large button</Button>
        <Button secondary lg>Large button</Button>
        <Button primary sm>Small button</Button>
        <Button secondary sm>Small button</Button>
      </div>
    )
  }
}
```

### Active state

Programmatically set buttons to appear pressed.

```
renderComp:button_5
import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary lg active as="a" href="#">Primary link</Button>
        <Button secondary lg active as="a" href="#">Link</Button>
      </div>
    )
  }
}
```

## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<Button>` element.

```
renderComp:button_6
import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary lg disabled>Primary button</Button>
        <Button secondary lg disabled>Button</Button>
        <Button primary lg disabled as="a" href="#">Primary link</Button>
        <Button secondary lg disabled as="a" href="#">Link</Button>
      </div>
    )
  }
}
```

## Toggle states

```
renderComp:button_7
import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Button primary data-toggle="button" aria-pressed="false">
        Single toggle
      </Button>
    )
  }
}
```

## Checkbox and radio buttons

```
renderComp:button_8
import React, { Component } from 'react';
import { Button, ButtonGroup, Checkbox } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonGroup toggle>
        <Button secondary active as="label">
          <Checkbox defaultChecked autoComplete="off" />
          Checked
        </Button>
      </ButtonGroup>
    )
  }
}
```

```
renderComp:button_9
import React, { Component } from 'react';
import { Button, ButtonGroup, Radio } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonGroup toggle>
        <Button secondary active as="label">
          <Radio autoComplete="off" />
          Active
        </Button>
        <Button secondary as="label">
          <Radio autoComplete="off" />
          Radio
        </Button>
        <Button secondary as="label">
          <Radio autoComplete="off" />
          Radio
        </Button>
      </ButtonGroup>
    )
  }
}
```
