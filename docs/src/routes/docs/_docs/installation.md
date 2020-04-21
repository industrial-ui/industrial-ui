<script>
import Title from '../_components/page-title.svelte';
</script>

<Title 
  title="Installation"
  subtitle="Several steps to get started with Industrial-ui"
/>

To get started, just type into your terminal:

<pre class="code">
```bash
npm i industrial-ui
```
</pre>

And then, the integration process depends on the framework you use.

<h2 id="svelte">Svelte</h2>

If you use **rollup**, you will not face any issue. Just import component and work with it!

<pre class="code">
```html
<script>
  import {IUI, Button} from 'industrial-ui';
</script>

<IUI>
  <Button>Hello, world!</Button>
</IUI>
```
</pre>

Take a look at the 
<a href="https://github.com/VanishMax/industrial-ui/tree/master/examples/svelte-iui" target="_blank">Svelte example</a>
in examples directory of repository section.
