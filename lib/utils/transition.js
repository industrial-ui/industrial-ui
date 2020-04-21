import {fade, fly, slide} from 'svelte/transition';

let defaults = {
  fly,
  fade,
  slide,
};

export default function dynamic(node, {transition, options = null, customs = {}}) {
  defaults = {...customs, ...defaults};
  return transition ? defaults[transition](node, options) : null;
}

