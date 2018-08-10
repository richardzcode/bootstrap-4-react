import React, { Component } from 'react';

import {
  stack,
  withColor,
  withDisplay,
  withSpacing,
  withSizing,
  withBorder,
  withScreenreaders
} from '../../utilities';

export function domStack(Comp) {
  return stack(
    Comp,
    [
      withColor(),
      withDisplay(),
      withSpacing(),
      withSizing(),
      withBorder(),
      withScreenreaders()
    ]
  );
}
