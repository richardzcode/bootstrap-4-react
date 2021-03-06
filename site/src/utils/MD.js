import React from 'react';
import Remarkable from 'remarkable';
import { BDiv } from 'bootstrap-4-react';

import docComponents from '../docComponents';

const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup;

function encodeHtml(content) {
  return content.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function heading(md) {
  md.renderer.rules.heading_open = function(tokens, idx, options, env) {
    const level = tokens[idx].hLevel;
    return '<h' + level + ' class="font-weight-light mb-3">'
  };
  md.renderer.rules.heading_close = function(tokens, idx, options, env) {
    const level = tokens[idx].hLevel;
    return '</h' + level + '>';
  }
}

function fence(md) {
  md.renderer.rules.fence = function(tokens, idx, options, env) {
    const lines = tokens[idx].content.split(/\r?\n/);
    const comp_lines = lines.filter(line => line.trim().startsWith('renderComp'));
    const content = lines.filter(line => !line.trim().startsWith('renderComp'))
      .join('\n');
    return (
      renderComp(comp_lines) +
      '<pre class="bg-light text-dark p-2 pre-scrollable"><code>' +
        encodeHtml(content) +
      '</code></pre>'
    )
  }
}

function renderComp(lines) {
  if (!lines || lines.length === 0) { return ''; }

  return lines.map(line => {
    if (!line.match(/:.+/)) { return ''; }

    const comp_key = line.split(/:/)[1].trim();
    const Comp = docComponents[comp_key];
    if (!Comp) { return ''; }

    return renderToStaticMarkup(
      <BDiv border="light" p="3" mt="1" className="bd-example">
        <Comp />
      </BDiv>
    )
  }).join('');
}

function blockquote(md) {
  md.renderer.rules.blockquote_open = function(tokens, idx, options, env) {
    return '<blockquote class="bd-callout">';
  }
  md.renderer.rules.blockquote_close = function(tokens, idx, options, env) {
    return '</blockquote>';
  }
}

function table(md) {
  md.renderer.rules.th_open = function(tokens, idx, options, env) {
    return '<th class="border p-2">'
  };
  md.renderer.rules.th_close = function(tokens, idx, options, env) {
    return '</th>';
  }
  md.renderer.rules.td_open = function(tokens, idx, options, env) {
    return '<td class="border p-2">'
  };
  md.renderer.rules.td_close = function(tokens, idx, options, env) {
    return '</td>';
  }
}

const md = new Remarkable('full', { html: true });
md.use(heading);
md.use(fence);
md.use(blockquote);
md.use(table);

export default class MD {
  render(content) {
    return md.render(content);
  }
}
