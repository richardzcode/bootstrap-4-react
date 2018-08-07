import React, { Component } from 'react';
import { JS } from 'fsts';

export default class StickyFooter extends Component {
  render() {
    const stickyStyle = {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      height: '60px', /* Set the fixed height of the footer here */
      lineHeight: '60px', /* Vertically center the text there */
      backgroundColor: '#f5f5f5'
    }

    const style = Object.assign({}, stickyStyle, this.props.style);
    const p = JS.lessProps(this.props, 'style');

    return (
      <footer
        style={style}
        {...p}
      >{this.props.children}</footer>
    )
  }
}
