import React, { Component } from 'react';
import {
  Nav,
  BDiv,
  BA
} from 'bootstrap-4-react';

export default class Utilities extends Component {
  renderItem(name, label) {
    const path = this.props.path || '';
    const subPath = path.replace(/^utilities\/?/, '') || 'flex';
    const subMatch = new RegExp(name + '\\/?$');
    const isActive = subPath.match(subMatch);

    return (
      <Nav.Item active={isActive}>
        <Nav.Link href={'#documentation/utilities/' + name}>{label}</Nav.Link>
      </Nav.Item>
    )
  }

  render() {
    const path = this.props.path || '';
    const isActive = path && path.startsWith('utilities');

    return (
      <React.Fragment>
        <BDiv className="bd-toc-item" active={isActive}>
          <BA className="bd-toc-link" href="#documentation/utilities">Utilities</BA>
        </BDiv>
        { isActive &&
          <Nav display="block">
            {this.renderItem('flex', 'Flex')}
            {this.renderItem('float', 'Float')}
          </Nav>
        }
      </React.Fragment>
    )
  }
}
