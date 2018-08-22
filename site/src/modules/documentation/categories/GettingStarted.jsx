import React, { Component } from 'react';
import {
  Nav,
  BDiv,
  BA
} from 'bootstrap-4-react';

export default class GettingStarted extends Component {
  renderItem(name, label) {
    const path = this.props.path || '';
    const subPath = path.replace(/^getting-started\/?/, '') || 'introduction';
    const subMatch = new RegExp(name + '\\/?$');
    const isActive = subPath.match(subMatch);

    return (
      <Nav.Item active={isActive}>
        <Nav.Link href={'#documentation/getting-started/' + name}>{label}</Nav.Link>
      </Nav.Item>
    )
  }

  render() {
    const path = this.props.path;
    const isActive = path && path.startsWith('getting-started');

    return (
      <React.Fragment>
        <BDiv className="bd-toc-item" active={isActive}>
          <BA className="bd-toc-link" href="#documentation/getting-started">Getting started</BA>
        </BDiv>
        { isActive &&
          <Nav display="block">
            {this.renderItem('introduction', 'Introduction')}
            {this.renderItem('quick-start', 'Quick start')}
          </Nav>
        }
      </React.Fragment>
    )
  }
}
