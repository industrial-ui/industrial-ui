import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'lib/index.js',
  output: [
    { file: 'index.mjs', format: 'es' },
    { file: 'index.js', format: 'umd', name: 'iui' },
  ],
  plugins: [
    svelte({
      dev: false,
      generate: 'ssr',
    }),
    resolve(),
    commonjs()
  ]
};
