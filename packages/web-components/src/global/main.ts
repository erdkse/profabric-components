import { setMode } from '@stencil/core';
import { Modes } from '../utils/types';

setMode((elm) => {
  let mode;
  if (
    (window as any).PF &&
    (window as any).PF &&
    (window as any).PF.config.mode
  ) {
    mode = (window as any).PF.config.mode;
  }

  if (elm.getAttribute('mode')) {
    mode = elm.getAttribute('mode');
  }

  if (!mode) {
    mode = 'bs5';
  }

  if (!Modes.includes(mode)) {
    throw new Error('Not supported mode');
  }

  elm.setAttribute('mode', mode);
  return mode;
});
