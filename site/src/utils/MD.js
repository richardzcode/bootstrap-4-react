import Remarkable from 'remarkable';

function encodeHtml(content) {
  return content.replace(/</g, '&lt;')
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
    return (
      '<pre class="bg-light text-dark p-2"><code>' +
        encodeHtml(tokens[idx].content) +
      '</code></pre>'
    )
  }
}

const md = new Remarkable('full', { html: true });
md.use(heading);
md.use(fence);

export default class MD {
  render(content) {
    return md.render(content);
  }
}
