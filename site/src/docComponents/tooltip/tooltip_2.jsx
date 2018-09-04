import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.tooltip();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.tooltip('#tooltipWithHtml'), 2000);
  }

  render() {
    const tooltip = { html: '<em>Tooltip</em> <u>with</u> <b>HTML</b>' };
    return (
      <Button secondary tooltip={tooltip} id="tooltipWithHtml">
        Tooltip with HTML
      </Button>
    )
  }
}
