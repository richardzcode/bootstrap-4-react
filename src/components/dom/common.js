import React, { Component } from 'react';

import {
  stack,
  withColor,
  withDisplay,
  withSpacing,
  withSizing,
  withBorder,
  withActive,
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
      withActive(),
      withScreenreaders()
    ]
  );
}
