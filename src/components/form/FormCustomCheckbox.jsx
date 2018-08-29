import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class FormCustomCheckbox extends Component {
  render() {
    const { inline, id, name, checked, disabled } = this.props;
    const cn = mergeClassName(this.props, inline? 'custom-control-inline' : '');
    const p = JS.lessProps(
      this.props,
      [
        'className',
        'inline',
        'id',
        'name',
        'checked',
        'disabled'
      ]
    );

    const input_p = {
      type: 'checkbox',
      className: 'custom-control-input',
      id: id,
      name: name
    }

    return (
      <BDiv className={cn} {...p}>
        { disabled
          ? ( checked
              ? <input {...input_p} checked disabled />
              : <input {...input_p} disabled />
            )
          : ( checked
              ? <input {...input_p} checked />
              : <input {...input_p} />
            )
        }
        <label className="custom-control-label" htmlFor={id}>{this.props.children}</label>
      </BDiv>
    )
  }
}

export default withClassName('custom-control custom-checkbox')(FormCustomCheckbox);
