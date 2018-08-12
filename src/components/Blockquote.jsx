import React, { Component } from 'react';

import { withClassName } from '../utilities';
import { BBlockquote, BFooter } from './dom';

class _Blockquote extends Component {
  render() {
    return <BBlockquote {...this.props}>{this.props.children}</BBlockquote>
  }
}

class _BlockquoteFooter extends Component {
  render() {
    return <BFooter {...this.props}>{this.props.children}</BFooter>
  }
}

const Blockquote = withClassName('blockquote')(_Blockquote);
const BlockquoteFooter = withClassName('blockquote-footer')(_BlockquoteFooter);

Blockquote.Footer = BlockquoteFooter;

export default Blockquote;
