import React, { Component } from 'react';

import Home from './Home';
import Documentation from './documentation';
import Example from './Example';

function hitCount(category, label) {
  if (window.gtag) {
    const obj = {
      event_category: category
    }
    if (label) { obj.event_label = label; }
    window.gtag('event', 'hit', obj);
  }
}

export default class Main extends Component {
  renderHome(path) {
    if (path !== '/') { return null; }

    hitCount('home');
    return <Home />;
  }

  renderDocumentation(path) {
    if (!path.startsWith('documentation')) { return null; }

    const subPath = path.replace('documentation', '');

    hitCount('documentation', subPath);
    return <Documentation path={subPath}/>
  }

  renderExample(path) {
    if (!path.startsWith('example')) { return null; }

    const subPath = path.replace('example', '');

    hitCount('example', subPath);
    return <Example path={subPath}/>
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
