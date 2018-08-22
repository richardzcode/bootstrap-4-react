## Collapse

```
import React, { Component } from 'react';
import { Collapse, Button, Card } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary
          data-toggle="collapse"
          data-target="#collapseExample"
        >
          Toggle Collapse
        </Button>
        <Collapse id="collapseExample">
          <Card>
            <Card.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Card.Body>
          </Card>
        </Collapse>
      </div>
    )
  }
}
```
