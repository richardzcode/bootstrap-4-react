## Progress

Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.

```
renderComp: progress_1
import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="0" />
        </Progress>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="25" />
        </Progress>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="50" />
        </Progress>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="75" />
        </Progress>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="100" />
        </Progress>
      </React.Fragment>
    )
  }
}
```

### Labels

Add labels to your progress bars by placing text within the `<Progress.Bar>`.

```
renderComp: progress_2
import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Progress>
        <Progress.Bar min="0" max="100" now="25">25%</Progress.Bar>
      </Progress>
    )
  }
}
```

### Height

Set `height` on `<Progress>`, `<Progress.Bar>` will automatically resize accordingly.

```
renderComp: progress_3
import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Progress mb="2" style={{ height: '1px' }}>
          <Progress.Bar min="0" max="100" now="25" />
        </Progress>
        <Progress mb="2" style={{ height: '20px' }}>
          <Progress.Bar min="0" max="100" now="25" />
        </Progress>
      </React.Fragment>
    )
  }
}
```

### Backgrounds

Use background utility classes to change the appearance of individual progress bars.

```
renderComp: progress_4
import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="25" bg="success"/>
        </Progress>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="50" bg="info"/>
        </Progress>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="75" bg="warning"/>
        </Progress>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="100" bg="danger"/>
        </Progress>
      </React.Fragment>
    )
  }
}
```

### Multiple bars

Include multiple progress bars in a progress component if you need.

```
renderComp: progress_5
import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Progress>
        <Progress.Bar min="0" max="100" now="15"/>
        <Progress.Bar min="0" max="100" now="30" bg="success"/>
        <Progress.Bar min="0" max="100" now="20" bg="info"/>
      </Progress>
    )
  }
}
```

### Striped

Add `striped` to any `<Progress.Bar>` to apply a stripe via CSS gradient over the progress bar background color.

```
renderComp: progress_6
import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Progress mb="2">
          <Progress.Bar striped min="0" max="100" now="25" bg="success"/>
        </Progress>
        <Progress mb="2">
          <Progress.Bar striped min="0" max="100" now="50" bg="info"/>
        </Progress>
        <Progress mb="2">
          <Progress.Bar striped min="0" max="100" now="75" bg="warning"/>
        </Progress>
        <Progress mb="2">
          <Progress.Bar striped min="0" max="100" now="100" bg="danger"/>
        </Progress>
      </React.Fragment>
    )
  }
}
```

### Animated stripes

The striped gradient can also be animated. Add `animated` to `<Progress.Bar>` to animate the stripes right to left via CSS3 animations.

```
renderComp: progress_7
import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Progress mb="2">
        <Progress.Bar striped animated min="0" max="100" now="75" />
      </Progress>
    )
  }
}
```
