## Embeds

Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.

### About

Rules are directly applied to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements; optionally use an explicit descendant class .embed-responsive-item when you want to match the styling for other attributes.

### Example

```
renderComp: embed_1
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <BDiv embed="16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
      </BDiv>
    )
  }
}
```
