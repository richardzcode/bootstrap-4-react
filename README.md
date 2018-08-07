# bootstrap-4-react

Bootstrap 4 React components.

## Installation

```
npm install --save bootstrap-4-react
```

## Components

### Alert

```
import { Alert } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Alert primary>Primary Alert</Alert>
        <Alert secondary>Secondary Alert</Alert>
      </div>
    )
  }
}
```

### Button

```
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary>Primary</Button>
        <Button secondary outline>Secondary</Button>
        <Button success size="lg">Success</Button>
        <Button danger block>Danger</Button>
      </div>
    )
  }
}

### ButtonGroup

```
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
        <ButtonGroup vertical size="sm">
          <Button secondary>1</Button>
          <Button secondary>2</Button>
          <Button secondary>3</Button>
        </ButtonGroup>
      </div>
    )
  }
}
```
