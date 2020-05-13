import {fade, fly, slide} from 'svelte/transition';
import { create_in_transition, create_out_transition } from 'svelte/internal';

let defaults = {
  fly,
  fade,
  slide,
};

/**
 * Dynamic transition of the component – how it should fade in different situations. Not applicable for all components
 * @param {element} node
 * @param {string} transition – name of the transition
 * @param {object} options – Svelte's transition options like delay or duration
 * @param {object} customs – custom transitions configured in the global space of the iui config
 * @returns {*}
 */

const dynamic = (node, {transition, options = null, customs = {}}) => {
  defaults = {...customs, ...defaults};
  return transition ? defaults[transition](node, options) : null;
};
export default dynamic;


export const animate = (node, {transition, options = {}, customs = {}, isOut = false}) => {
  let intro;
  const transitions = {...customs, ...defaults};
  if (node && transition) {
    if (!intro) {
      if (isOut) {
        // TODO: fix this: create_out is never invoked because there is always intro. If in initialization, outros.r is undefined error
        intro = create_out_transition(node, transitions[transition], options);
      } else {
        intro = create_in_transition(node, transitions[transition], options);
      }
    }
    intro.start();
  }
};

