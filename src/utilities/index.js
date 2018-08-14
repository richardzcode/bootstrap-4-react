export { withClassName, mergeClassName } from './className';
export { withPurpose } from './purpose';
export { withColor } from './color';
export { withDisplay } from './display';
export { withAlign } from './align';
export { withSpacing } from './spacing';
export { withSizing } from './sizing';
export { withBorder } from './border';
export { withActive } from './active';
export { withDrop } from './drop';
export { withScreenreaders } from './screenreaders';
export { withTooltip } from './tooltip';
export { withPopover } from './popover';

export function stack(Comp, funcs) {
  if (!funcs) { return Comp; }

  let C = Comp;
  for (var i = 0; i < funcs.length; i++) {
    C = funcs[i](C);
  }

  return C;
}
