import React, { Component } from 'react';
import {
  Nav,
  BDiv,
  BA
} from 'bootstrap-4-react';

export default class Components extends Component {
  renderItem(name, label) {
    const path = this.props.path || '';
    const subPath = path.replace(/^components\/?/, '') || 'alert';
    const subMatch = new RegExp(name + '\\/?$');
    const isActive = subPath.match(subMatch);

    return (
      <Nav.Item active={isActive}>
        <Nav.Link href={'#documentation/components/' + name}>{label}</Nav.Link>
      </Nav.Item>
    )
  }

  render() {
    const path = this.props.path || '';
    const isActive = path && path.startsWith('components');

    return (
      <React.Fragment>
        <BDiv className="bd-toc-item" active={isActive}>
          <BA className="bd-toc-link" href="#documentation/components">Components</BA>
        </BDiv>
        { isActive &&
          <Nav display="block">
            {this.renderItem('alert', 'Alert')}
            {this.renderItem('badge', 'Badge')}
            {this.renderItem('blockquote', 'Blockquote')}
            {this.renderItem('button', 'Button')}
            {this.renderItem('button-group', 'ButtonGroup')}
            {this.renderItem('card', 'Card')}
            {this.renderItem('carousel', 'Carousel')}
            {this.renderItem('collapse', 'Collapse')}
            {this.renderItem('display', 'Display')}
            {this.renderItem('dropdown', 'Dropdown')}
            {this.renderItem('figure', 'Figure')}
            {this.renderItem('form', 'Form')}
            {this.renderItem('input-group', 'InputGroup')}
            {this.renderItem('jumbotron', 'Jumbotron')}
            {this.renderItem('lead', 'Lead')}
            {this.renderItem('list', 'List')}
            {this.renderItem('list-group', 'ListGroup')}
            {this.renderItem('modal', 'Modal')}
            {this.renderItem('nav', 'Nav')}
            {this.renderItem('navbar', 'Navbar')}
            {this.renderItem('progress', 'Progress')}
            {this.renderItem('popover', 'Popover')}
            {this.renderItem('tooltip', 'Tooltip')}
          </Nav>
        }
      </React.Fragment>
    )
  }
}
