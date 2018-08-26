import React, { Component } from 'react';
import { Dropdown, ButtonGroup, Button, BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonGroup dropup>
          <Dropdown.Button primary>Dropup</Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
        <ButtonGroup dropup>
          <Button primary>Split dropup</Button>
          <Dropdown.Button primary split><BSpan srOnly>Toggle Dropdown</BSpan></Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>

        <ButtonGroup dropleft>
          <Dropdown.Button secondary>Dropleft</Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
        <ButtonGroup dropleft>
          <Button secondary>Split dropleft</Button>
          <Dropdown.Button secondary split><BSpan srOnly>Toggle Dropdown</BSpan></Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>

        <ButtonGroup dropright>
          <Dropdown.Button success>Dropright</Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
        <ButtonGroup dropright>
          <Button success>Split dropright</Button>
          <Dropdown.Button success split><BSpan srOnly>Toggle Dropdown</BSpan></Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
      </React.Fragment>
    )
  }
}
