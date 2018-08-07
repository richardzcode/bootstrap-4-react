function mergeClassName(props, className) {
  const cn = [].concat(props.className || [], className || []);
  return cn
    .filter(name => !!name.trim())
    .join(' ');
}

export {
  mergeClassName
};
