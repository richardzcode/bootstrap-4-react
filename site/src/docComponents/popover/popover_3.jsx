import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.popover();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.popover('#popoverDismissible'), 2000);
  }

  render() {
    return (
      <Button
        secondary
        popover={{ dismissible: true, html: '<em>Popover</em> <u>with</u> <b>HTML</b>' }}
        id="popoverDismissible"
      >
        Dismissible popover with HTML
      </Button>
    )
  }
}
