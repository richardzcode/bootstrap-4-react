export { withClassName, mergeClassName } from './className';
export { withPurpose } from './purpose';

export function stack(Comp, funcs) {
  if (!funcs) { return Comp; }

  let C = Comp;
  for (var i = 0; i < funcs.length; i++) {
    C = funcs[i](C);
  }

  return C;
}
