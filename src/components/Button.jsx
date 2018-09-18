import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, withClassName, mergeClassName, withPurpose, withDrop } from '../utilities';
import { BButton, BA, BInput, BLabel } from './dom';

class Button extends Component {
  render() {
    const { block, active, disabled, lg, sm, dropdownToggle, as } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        lg? 'btn-lg' : '',
        sm? 'btn-sm' : '',
        block? 'btn-block' : '',
        active? 'active' : '',
        dropdownToggle? 'dropdown-toggle' : '',
        (as && as === 'a' && disabled)? 'disabled' : ''
      ]
    );
    let p = JS.lessProps(
      this.props,
      ['className', 'block', 'outline', 'lg', 'sm', 'dropdownToggle', 'as']
    );
    if (as && as === 'a' && disabled) { p = JS.lessProps(p, 'disabled'); }
    if (active) { p['aria-pressed'] = 'true' }

    if (!as) {
      return (
        <BButton className={cn} {...p}>{this.props.children}</BButton>
      )
    }

    switch(as) {
      case 'a':
        return disabled
          ? <BA role="button" className={cn} {...p} aria-disabled="true">{this.props.children}</BA>
          : <BA role="button" className={cn} {...p}>{this.props.children}</BA>
      case 'input':
        return <BInput className={cn} {...p}>{this.props.children}</BInput>
      case 'label':
        return <BLabel className={cn} {...p}>{this.props.children}</BLabel>
      default:
        return <BButton className={cn} {...p}>{this.props.children}</BButton>
    }
  }
}

function purposePrefix(props) {
  const { outline } = props;
  return outline? 'btn-outline' : 'btn';
}

export default stack(
  Button,
  [
    withClassName('btn'),
    withPurpose(purposePrefix),
    withDrop()
  ]
);
