<script>
import Title from '../../_components/page-title.svelte';
import Link from '../../_components/link.svelte';
import ShowBlock from '../../_components/show-block.svelte';
import PropsSlotsMarkup from './props-slots-markup.md';
import SimpleExample from './simple-example/spectre.svelte';
</script>

<Title
  id="examples"
  title="Modal"
  subtitle="Modal window with an overlay"
/>

<ShowBlock>
  <SimpleExample />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Modal, Button} from 'industrial-ui';
  </script>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center',
    },
    modal: {
    },
  },
  ```
  </pre>
</ShowBlock>

<PropsSlotsMarkup />
