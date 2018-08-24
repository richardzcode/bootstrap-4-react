import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary as="a" href="#">Link</Button>
        <Button primary>Button</Button>
        <Button primary as="input" type="button" value="Input" />
        <Button primary as="input" type="submit" value="Submit" />
        <Button primary as="input" type="reset" value="Reset" />
      </div>
    )
  }
}
