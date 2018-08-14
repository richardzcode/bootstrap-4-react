import React, { Component } from 'react';
import { JS } from 'fsts';

export function withPopover() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { popover, title } = this.props;
        if (!popover) { return <Comp {...this.props}>{this.props.children}</Comp> }
        const p = JS.lessProps(this.props, ['popover', 'title']);

        const is_boolean = (typeof popover === 'boolean');
        const is_string = (typeof popover === 'string');
        const t_title = is_boolean? title : popover.title;
        const t_content = is_boolean? '' : (is_string? popover : popover.content || popover.html);
        if (!is_boolean && popover.placement) { p['data-placement'] = popover.placement; }
        if (!is_boolean && popover.html) { p['data-html'] = 'true'; }
        if (!is_boolean && popover.dismissible) { p['data-trigger'] = 'focus'; }
        if (t_content) { p['data-content'] = t_content; }

        return (
          <Comp
            data-toggle="popover"
            title={t_title}
            {...p}
          >{this.props.children}</Comp>
        )
      }
    }
  }
}
