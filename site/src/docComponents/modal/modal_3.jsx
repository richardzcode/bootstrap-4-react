import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Button trigger Modal */}
        <Button primary data-toggle="modal" data-target="#exampleModal3">Launch modal</Button>

        {/* Modal */}
        <Modal id="exampleModal3" fade>
          <Modal.Dialog centered>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
                <Container fluid>
                  <Row>
                    <Col col="md-4">col-md-4</Col>
                    <Col col="md-4" ml="auto">col-md-4 ml-auto</Col>
                  </Row>
                  <Row>
                    <Col col="md-3" ml="auto">col-md-3 ml-auto</Col>
                    <Col col="md-2" ml="auto">col-md-2 ml-auto</Col>
                  </Row>
                  <Row>
                    <Col col="md-6" ml="auto">col-md-6 ml-auto</Col>
                  </Row>
                  <Row>
                    <Col col="sm-9">
                      Level 1: col-sm-9
                      <Row>
                        <Col col="8 sm-6">
                          Level 2: col-8 col-sm-6
                        </Col>
                        <Col col="4 sm-6">
                          Level 2: col-4 col-sm-6
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button secondary data-dismiss="modal">Close</Button>
                <Button primary>Save changes</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>
      </div>
    )
  }
}
