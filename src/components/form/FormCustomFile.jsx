import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class FormCustomRadio extends Component {
  render() {
    const { id, name, disabled } = this.props;
    const p = JS.lessProps(
      this.props,
      [
        'id',
        'name',
        'disabled'
      ]
    );

    const input_p = {
      type: 'file',
      className: 'custom-file-input',
      id: id,
      name: name
    }

    return (
      <BDiv {...p}>
        { disabled
          ? <input {...input_p} disabled />
          : <input {...input_p} />
        }
        <label className="custom-file-label" htmlFor={id}>{this.props.children}</label>
      </BDiv>
    )
  }
}

export default withClassName('custom-file')(FormCustomRadio);
