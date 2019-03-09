import { withClassName, flatClassName, mergeClassName } from './className';
import { withPurpose } from './purpose';
import { withColor } from './color';
import { withDisplay } from './display';
import { withAlign } from './align';
import { withSpacing } from './spacing';
import { withSizing } from './sizing';
import { withBorder } from './border';
import { withActive } from './active';
import { withDrop } from './drop';
import { withScreenreaders } from './screenreaders';
import { withTooltip } from './tooltip';
import { withPopover } from './popover';
import { withFlex } from './flex';
import { withFloat } from './float';
import { withShadow } from './shadow';
import { withFont } from './font';
import { withPosition } from './position';
import { withEmbed } from './embed';

export function stack(Comp, funcs) {
  if (!funcs) { return Comp; }

  let C = Comp;
  for (var i = 0; i < funcs.length; i++) {
    C = funcs[i](C);
  }

  return C;
}

const domStack = [
  withColor(),
  withDisplay(),
  withAlign(),
  withSpacing(),
  withSizing(),
  withBorder(),
  withActive(),
  withScreenreaders(),
  withPopover(),
  withTooltip(),
  withFlex(),
  withFloat(),
  withShadow(),
  withFont(),
  withPosition(),
  withEmbed()
]

export {
  domStack,
  withClassName,
  flatClassName,
  mergeClassName,
  withPurpose,
  withColor,
  withDisplay,
  withAlign,
  withSpacing,
  withSizing,
  withBorder,
  withActive,
  withDrop,
  withScreenreaders,
  withTooltip,
  withPopover,
  withFlex,
  withFloat,
  withShadow,
  withFont,
  withPosition,
  withEmbed
};
