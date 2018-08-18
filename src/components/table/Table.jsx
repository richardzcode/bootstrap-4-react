import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, mergeClassName, withClassName, withPurpose } from '../../utilities';
import { BTable } from '../dom';

class Table extends Component {
  render() {
    const { striped, bordered, hover, sm } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        striped? 'table-striped' : '',
        bordered? 'table-bordered' : '',
        hover? 'table-hover' : '',
        sm? 'table-sm' : ''
      ]
    );
    const p = JS.lessProps(this.props, ['striped', 'bordered', 'hover', 'sm']);

    return <BTable {...p} className={cn}>{this.props.children}</BTable>
  }
}

export default stack(
  Table,
  [
    withClassName('table'),
    withPurpose('table')
  ]
);
