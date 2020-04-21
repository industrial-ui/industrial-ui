import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

const pkg = require('./package.json');
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'lib/index.js',
  output: [
    { file: pkg.module, format: 'es' },
    // { file: pkg.main, 'format': 'umd', name: 'industrial-ui' },
    { file: pkg.main, format: 'iife', name: 'iui' },
  ],
  plugins: [
    svelte({
      dev: !production,
      // generate: 'ssr',
      customElement: true,
    }),
    resolve(),
    production && terser(),
  ]
};
