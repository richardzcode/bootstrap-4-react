import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import Button from '../Button';

class DropdownButton extends Component {
  render() {
    const { split } = this.props;
    const cn = mergeClassName(this.props, split? 'dropdown-toggle-split' : '');
    const p = JS.lessProps(this.props, ['className', 'split']);

    return <Button {...p} className={cn} data-toggle="dropdown" aria-haspopup="true">{this.props.children}</Button>
  }
}

export default withClassName('dropdown-toggle')(DropdownButton);
