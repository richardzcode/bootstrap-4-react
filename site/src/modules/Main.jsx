import React, { Component } from 'react';

import Home from './Home';
import Documentation from './documentation';
import Example from './Example';
import Cbra from './Cbra';

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

  renderCbra(path) {
    if (path !== 'cbra') { return null; }

    hitCount('cbra');
    return <Cbra />;
  }

  render() {
    const { path } = this.props;

    return (
      <React.Fragment>
        {this.renderHome(path)}
        {this.renderDocumentation(path)}
        {this.renderExample(path)}
        {this.renderCbra(path)}
      </React.Fragment>
    )
  }
}
