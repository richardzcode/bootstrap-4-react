## Modal

```
import React, { Component } from 'react';
import { Modal, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Modal id="exampleModal" fade>
          <Modal.Dialog centered>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
                Woohoo
              </Modal.Body>
              <Modal.Footer>
                <Button secondary data-dismiss="modal">Close</Button>
                <Button primary>Save changes</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>
        <Button primary data-toggle="modal" data-target="#exampleModal">Launch modal</Button>
      </div>
    )
  }
}
```
