import {fade, fly, slide} from 'svelte/transition';

const defaults = {
  fly,
  fade,
  slide,
};

export default function dynamic(node, {transition, options = null}) {
  return transition ? defaults[transition](node, options) : null;
}

