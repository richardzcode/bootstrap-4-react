## Colors

Convey meaning through color with a handful of color utilities. Includes support for styling links with hover states, too.

### Color

```
renderComp: colors_1
import React, { Component } from 'react';
import { BP } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BP text="primary">text-primary</BP>
        <BP text="secondary">text-secondary</BP>
        <BP text="success">text-success</BP>
        <BP text="danger">text-danger</BP>
        <BP text="warning">text-warning</BP>
        <BP text="info">text-info</BP>
        <BP text="light" bg="dark">text-light</BP>
        <BP text="dark">text-dark</BP>
        <BP text="body">text-body</BP>
        <BP text="muted">text-muted</BP>
        <BP text="white" bg="dark">text-white</BP>
        <BP text="black-50">text-black-50</BP>
        <BP text="white-50" bg="dark">text-white-50</BP>
      </React.Fragment>
    )
  }
}
```

Contextual text modifiers also work well on anchors with the provided hover and focus states. Note that the `text-white` and `text-muted` modifier has no additional link styling beyond underline.

```
renderComp: colors_2
import React, { Component } from 'react';
import { BA } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <p><p><BA href="#" text="primary">Primary link</BA></p></p>
        <p><BA href="#" text="secondary">Secondary link</BA></p>
        <p><BA href="#" text="success">Success link</BA></p>
        <p><BA href="#" text="danger">Danger link</BA></p>
        <p><BA href="#" text="warning">Warning link</BA></p>
        <p><BA href="#" text="info">Info link</BA></p>
        <p><BA href="#" text="light" bg="dark">Light link</BA></p>
        <p><BA href="#" text="dark">Dark link</BA></p>
        <p><BA href="#" text="body">Body link</BA></p>
        <p><BA href="#" text="muted">Muted link</BA></p>
        <p><BA href="#" text="white" bg="dark">White link</BA></p>
        <p><BA href="#" text="black-50">Black 50 link</BA></p>
        <p><BA href="#" text="white-50" bg="dark">White 50 link</BA></p>
      </React.Fragment>
    )
  }
}
```

### Background color

Similar to the contextual text color modifiers, easily set the background of an element to any contextual modifier. Anchor components will darken on hover, just like the text modifiers.

```
renderComp: colors_3
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BDiv p="3" mb="2" bg="primary" text="white">bg-primary</BDiv>
        <BDiv p="3" mb="2" bg="secondary" text="white">bg-secondary</BDiv>
        <BDiv p="3" mb="2" bg="success" text="white">bg-success</BDiv>
        <BDiv p="3" mb="2" bg="danger" text="white">bg-danger</BDiv>
        <BDiv p="3" mb="2" bg="warning" text="dark">bg-warning</BDiv>
        <BDiv p="3" mb="2" bg="info" text="white">bg-info</BDiv>
        <BDiv p="3" mb="2" bg="light" text="dark">bg-light</BDiv>
        <BDiv p="3" mb="2" bg="dark" text="white">bg-dark</BDiv>
        <BDiv p="3" mb="2" bg="white" text="dark">bg-white</BDiv>
        <BDiv p="3" mb="2" bg="transparent" text="dark">bg-transparent</BDiv>
      </React.Fragment>
    )
  }
}
```
