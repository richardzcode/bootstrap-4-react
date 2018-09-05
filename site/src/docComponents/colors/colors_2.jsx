import React, { Component } from 'react';
import { BA } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <p><p><BA href="#" text="primary">Primary link</BA></p></p>
        <p><BA href="#" text="secondary">Secondary link</BA></p>
        <p><BA href="#" text="success">Success link</BA></p>
        <p><BA href="#" text="danger">Danger link</BA></p>
        <p><BA href="#" text="warning">Warning link</BA></p>
        <p><BA href="#" text="info">Info link</BA></p>
        <p><BA href="#" text="light" bg="dark">Light link</BA></p>
        <p><BA href="#" text="dark">Dark link</BA></p>
        <p><BA href="#" text="body">Body link</BA></p>
        <p><BA href="#" text="muted">Muted link</BA></p>
        <p><BA href="#" text="white" bg="dark">White link</BA></p>
        <p><BA href="#" text="black-50">Black 50 link</BA></p>
        <p><BA href="#" text="white-50" bg="dark">White 50 link</BA></p>
      </React.Fragment>
    )
  }
}
