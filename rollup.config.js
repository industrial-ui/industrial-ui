import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'lib/index.js',
  output: [
    { file: 'public/index.js', 'format': 'es' },
  ],
  plugins: [
    svelte({
      dev: false,
      hydratable: true,
    }),
    resolve(),
    commonjs()
  ]
};
