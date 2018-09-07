import React, { Component } from 'react';
import { Breadcrumb } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav aria-label="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
          </Breadcrumb>
        </nav>
        <nav aria-label="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
          </Breadcrumb>
        </nav>
        <nav aria-label="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href="#">Library</a></Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
          </Breadcrumb>
        </nav>
      </React.Fragment>
    )
  }
}
