import React, { Component } from 'react';
import { List } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <List inline>
        <List.Item inline>Lorem ipsum</List.Item>
        <List.Item inline>Phasellus iaculis</List.Item>
        <List.Item inline>Nulla volutpat</List.Item>
      </List>
    )
  }
}
