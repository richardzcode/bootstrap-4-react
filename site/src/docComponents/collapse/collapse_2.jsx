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
