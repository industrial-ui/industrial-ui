import {fade, fly, slide} from 'svelte/transition';

const defaults = {
  fly,
  fade,
  slide,
};

export default function dynamic(node, {transition = 'fly', options = null}) {
  return defaults[transition](node, options);
}

