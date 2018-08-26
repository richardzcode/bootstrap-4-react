import React, { Component } from 'react';
import { Collapse, Card } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          <Collapse.Button primary as="a" target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Link with href
          </Collapse.Button>
          <Collapse.Button primary target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Button with data-target
          </Collapse.Button>
        </p>
        <Collapse id="collapseExample">
          <Card>
            <Card.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Card.Body>
          </Card>
        </Collapse>
      </React.Fragment>
    )
  }
}
