import {fade, fly, slide} from 'svelte/transition';

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

