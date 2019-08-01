import React, { Component } from 'react';
import {
  Jumbotron,
  Display4,
  Lead,
  Button,
  BImg,
  BDiv,
  List
} from 'bootstrap-4-react';

export default class Main extends Component {
  render() {
    return (
      <Jumbotron bg="white" text="dark">
        <Display4>Bootstrap</Display4>
        <BDiv display="flex">
          <BDiv>
            <Lead>Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</Lead>
            <Lead>Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.</Lead>
          </BDiv>
          <BImg src="bootstrap-logo.svg" display="none md-block" alignSelf="start" />
        </BDiv>
        <Display4>React</Display4>
        <BDiv display="flex">
          <BDiv flex="grow-1">
            <Lead>A JavaScript library for building user interfaces</Lead>
            <List unstyled ml="3">
              <List.Item text="black-50">Declarative</List.Item>
              <List.Item text="black-50">Component-Based</List.Item>
              <List.Item text="black-50">Learn Once, Write Anywhere</List.Item>
            </List>
          </BDiv>
          <BImg src="react-logo.svg" display="none md-block" />
        </BDiv>
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
