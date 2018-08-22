import React, { Component } from 'react';

import Home from './Home';
import Documentation from './documentation';
import Example from './Example';

export default class Main extends Component {
  renderHome(path) {
    return path === '/'? <Home /> : null;
  }

  renderDocumentation(path) {
    if (!path.startsWith('documentation')) { return null; }

    return <Documentation path={path.replace('documentation', '')}/>
  }

  renderExample(path) {
    if (!path.startsWith('example')) { return null; }

    return <Example path={path.replace('example', '')}/>
  }

  render() {
    const { path } = this.props;

    return (
      <React.Fragment>
        {this.renderHome(path)}
        {this.renderDocumentation(path)}
        {this.renderExample(path)}
      </React.Fragment>
    )
  }
}
