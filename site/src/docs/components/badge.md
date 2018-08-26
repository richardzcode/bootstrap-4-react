## Badge

Small count and labeling component.

```
renderComp:badge_1
import React, { Component } from 'react';
import { Badge, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary>
          Profile <Badge light>9</Badge>
        </Button>
      </div>
    )
  }
}
```

### Contextual variations

Add any of the below mentioned modifier to change the appearance of a badge.

```
renderComp:badge_2
import React, { Component } from 'react';
import { Badge } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Badge primary>Primary</Badge>
        <Badge secondary>Secondary</Badge>
        <Badge success>Success</Badge>
        <Badge danger>Danger</Badge>
        <Badge warning>Warning</Badge>
        <Badge info>Info</Badge>
        <Badge light>Light</Badge>
        <Badge dark>Dark</Badge>
      </div>
    )
  }
}
```

### Pill badges

Use the `pill` modifier to make badges more rounded.

```
renderComp:badge_3
import React, { Component } from 'react';
import { Badge } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Badge pill primary>Primary</Badge>
        <Badge pill secondary>Secondary</Badge>
        <Badge pill success>Success</Badge>
        <Badge pill danger>Danger</Badge>
        <Badge pill warning>Warning</Badge>
        <Badge pill info>Info</Badge>
        <Badge pill light>Light</Badge>
        <Badge pill dark>Dark</Badge>
      </div>
    )
  }
}
```
