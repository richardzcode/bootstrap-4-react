import React, { Component } from 'react';
import {
  Jumbotron,
  Display4,
  Lead,
  Button
} from 'bootstrap-4-react';

export default class Main extends Component {
  render() {
    return (
      <Jumbotron>
        <Display4>Bootstrap</Display4>
        <Lead>Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</Lead>
        <Display4>React</Display4>
        <Lead>A JavaScript library for building user interfaces</Lead>
        <hr className="my-4" />
        <Lead display="inline-block" mr="3">Bootstrap 4 + React</Lead>
        <Button
          primary
          outline
          lg
          as="a"
          href="#documentation/getting-started/quick-start"
        >
          Get started
        </Button>
      </Jumbotron>
    )
  }
}
