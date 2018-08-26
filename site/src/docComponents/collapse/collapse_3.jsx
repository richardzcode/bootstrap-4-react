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
