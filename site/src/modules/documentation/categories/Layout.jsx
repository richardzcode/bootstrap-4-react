import React, { Component } from 'react';
import {
  Nav,
  BDiv,
  BA
} from 'bootstrap-4-react';

export default class GettingStarted extends Component {
  renderItem(name, label) {
    const path = this.props.path || '';
    const subPath = path.replace(/^layout\/?/, '') || 'grid';
    const subMatch = new RegExp(name + '\\/?$');
    const isActive = subPath.match(subMatch);

    return (
      <Nav.Item active={isActive}>
        <Nav.Link href={'#documentation/layout/' + name}>{label}</Nav.Link>
      </Nav.Item>
    )
  }

  render() {
    const path = this.props.path;
    const isActive = path && path.startsWith('layout');

    return (
      <React.Fragment>
        <BDiv className="bd-toc-item" active={isActive}>
          <BA className="bd-toc-link" href="#documentation/layout">Layout</BA>
        </BDiv>
        { isActive &&
          <Nav display="block">
            {this.renderItem('grid', 'Grid')}
          </Nav>
        }
      </React.Fragment>
    )
  }
}
