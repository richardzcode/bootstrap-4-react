## Collapse

The `<Collapse>` component is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the height from it’s current value to 0. Given how CSS handles animations, you cannot use padding on a `<Collapse>` component. Instead, use it as an independent wrapping component.

```
renderComp: collapse_1
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
```

### Multiple targets

Show and hide multiple components by referencing them with a jQuery selector.

```
renderComp: collapse_2
import React, { Component } from 'react';
import { Collapse, Card, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          <Collapse.Button primary as="a" target="#multiCollapseExample1" aria-expanded="false" aria-controls="collapseExample">
            Toggle first component
          </Collapse.Button>
          <Collapse.Button primary target="#multiCollapseExample2" aria-expanded="false" aria-controls="collapseExample">
            Toggle second component
          </Collapse.Button>
          <Collapse.Button primary target=".multi-collapse" aria-expanded="false" aria-controls="collapseExample">
            Toggle both component
          </Collapse.Button>
        </p>
        <Row>
          <Col>
            <Collapse id="multiCollapseExample1" className="multi-collapse">
              <Card>
                <Card.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Card.Body>
              </Card>
            </Collapse>
          </Col>
          <Col>
            <Collapse id="multiCollapseExample2" className="multi-collapse">
              <Card>
                <Card.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Card.Body>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
```

### Accordion example

You can extend the default collapse behavior to create an accordion. Set `data-parent` to each `<Collapse>` reference to wrapper component.

```
renderComp: collapse_3
import React, { Component } from 'react';
import { Collapse, Card } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div id="accordionExample">
        <Card>
          <Card.Header mb="0">
            <Collapse.Button link target="#collapseOne" id="headingOne" aria-expanded="true">
              Collapsible Group Item #1
            </Collapse.Button>
          </Card.Header>
          <Collapse id="collapseOne" show aria-labelledby="headingOne" data-parent="#accordionExample">
            <Card.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </Card.Body>
          </Collapse>
        </Card>
        <Card>
          <Card.Header mb="0">
            <Collapse.Button link target="#collapseTwo" id="headingTwo" aria-expanded="false">
              Collapsible Group Item #2
            </Collapse.Button>
          </Card.Header>
          <Collapse id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <Card.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </Card.Body>
          </Collapse>
        </Card>
        <Card>
          <Card.Header mb="0">
            <Collapse.Button link target="#collapseThree" id="headingThree" aria-expanded="false">
              Collapsible Group Item #3
            </Collapse.Button>
          </Card.Header>
          <Collapse id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
            <Card.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </Card.Body>
          </Collapse>
        </Card>
      </div>
    )
  }
}
```
