import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from '../../utilities';

export function withSizing() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { lg, sm } = this.props;
        const cn = mergeClassName(
          this.props,
          [
            lg? 'form-control-lg' : '',
            sm? 'form-control-sm' : ''
          ]
        );
        const p = JS.lessProps(this.props, ['className', 'lg', 'sm']);

        return <Comp {...p} className={cn} />
      }
    }
  }
}

export function withValidation() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { valid } = this.props;
        const cn = mergeClassName(
          this.props,
          [
            valid === true? 'is-valid' : '',
            valid === false? 'is-invalid' : ''
          ]
        );
        const p = JS.lessProps(this.props, ['className', 'valid']);

        return <Comp {...p} className={cn} />
      }
    }
  }
}
