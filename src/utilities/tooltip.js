import React, { Component } from 'react';
import { JS } from 'fsts';

export function withTooltip() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { tooltip, title } = this.props;
        if (!tooltip) { return <Comp {...this.props}>{this.props.children}</Comp> }
        const p = JS.lessProps(this.props, ['tooltip', 'title']);

        const is_boolean = (typeof tooltip === 'boolean');
        const is_string = (typeof tooltip === 'string');
        const t_title = is_boolean? title : (is_string? tooltip : tooltip.title || tooltip.html);
        if (!is_boolean && tooltip.placement) { p['data-placement'] = tooltip.placement; }
        if (!is_boolean && tooltip.html) { p['data-html'] = 'true'; }

        return (
          <Comp
            data-toggle="tooltip"
            title={t_title}
            {...p}
          >{this.props.children}</Comp>
        )
      }
    }
  }
}
