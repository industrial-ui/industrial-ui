import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

const pkg = require('./package.json');

export default {
  input: 'lib/index.js',
  output: [
    { file: pkg.module, 'format': 'es', plugins: [terser()] },
    { file: pkg.main, 'format': 'umd', name: 'industrial-ui' },
  ],
  plugins: [
    svelte({
      dev: false,
      generate: 'ssr',
    }),
    resolve(),
  ]
};
