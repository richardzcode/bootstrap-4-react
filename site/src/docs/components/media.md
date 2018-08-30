## Media

The media object helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media.

```
renderComp: media_1
import React, { Component } from 'react';
import { Media, BImg, BH5 } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Media>
        <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" mr="3"/>
        <Media.Body>
          <BH5 mt="0">Media heading</BH5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media.Body>
      </Media>
    )
  }
}
```

### Alignment

Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your `<Media.Body>` content.

```
renderComp: media_2
import React, { Component } from 'react';
import { Media, BImg, BH5 } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Media border="info" p="3" mb="3">
          <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" alignSelf="start" mr="3"/>
          <Media.Body>
            <BH5 mt="0">Media heading</BH5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media.Body>
        </Media>
        <Media border="info" p="3" mb="3">
          <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" alignSelf="center" mr="3"/>
          <Media.Body>
            <BH5 mt="0">Media heading</BH5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media.Body>
        </Media>
        <Media border="info" p="3" mb="3">
          <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" alignSelf="end" mr="3"/>
          <Media.Body>
            <BH5 mt="0">Media heading</BH5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media.Body>
        </Media>
      </div>
    )
  }
}
```

### Media list

```
renderComp: media_3
import React, { Component } from 'react';
import { List, Media, BImg, BH5 } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <List unstyled>
        <Media as="li">
          <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" mr="3"/>
          <Media.Body>
            <BH5 mt="0">Media heading</BH5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media.Body>
        </Media>
        <Media as="li" my="4">
          <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg"  mr="3"/>
          <Media.Body>
            <BH5 mt="0">Media heading</BH5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media.Body>
        </Media>
        <Media as="li">
          <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" mr="3"/>
          <Media.Body>
            <BH5 mt="0">Media heading</BH5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media.Body>
        </Media>
      </List>
    )
  }
}
```
