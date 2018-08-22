## ButtonGroup

```
import React, { Component } from 'react';
import { ButtonGroup, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button secondary>1</Button>
          <Button secondary>2</Button>
          <Button secondary>3</Button>
        </ButtonGroup>
        <ButtonGroup vertical sm>
          <Button secondary>1</Button>
          <Button secondary>2</Button>
          <Button secondary>3</Button>
        </ButtonGroup>
      </div>
    )
  }
}
```
