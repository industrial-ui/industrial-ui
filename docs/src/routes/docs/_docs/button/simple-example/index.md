<script>
import {Button} from 'industrial-ui';
import ShowBlock from '../../../_components/show-block.svelte';
</script>

<ShowBlock>
  <Button>Hello</Button>
  <Button class="special" is:outline is:icon>Trying example</Button>
  <Button title="some" is:icon={false} is:outline="false">Cool thing</Button>
  <Button title="some" is:primary>Primary</Button>
  <Button title="some" is:labeled>
    <div class="ui red button">
      Likes
    </div>
    <span class="ui basic red left pointing label">
      1,048
    </span>
  </Button>
  
  <pre class="code" slot="code">
  ```html
  <script>
    import Button from 'industrial-ui/Button';
  </script>
  
  <Button>Hello</Button>
  <Button class="special" is:outline is:icon>Trying example</Button>
  <Button title="some" is:icon={false} is:outline="false">Cool thing</Button>
  <Button title="some" is:primary>Primary</Button>
  <Button title="some" is:labeled>
    <div class="ui red button">
      Likes
    </div>
    <span class="ui basic red left pointing label">
      1,048
    </span>
  </Button>
  ```
  </pre>
  
  <pre class="code" slot="config-semantic">
  ```javascript
  components: {
    button: {
      class: 'ui button',
      isProperties: {
        primary: 'primary',
        outline: 'outline',
        icon: 'round icon',
        labeled: 'labeled',
      },
    }
  }
  ```
  </pre>
  
  <pre class="code" slot="config-spectre">
  ```javascript
  components: {
    button: {
      class: 'btn',
      isProperties: {
        primary: 'btn-primary',
      },
    },
  }
  ```
  </pre>

  <pre class="code" slot="config-tailwind">
  ```javascript
  components: {
    button: {
      class: 'ui button',
      isProperties: {
        primary: 'primary',
        outline: 'outline',
        icon: 'round icon',
        labeled: 'labeled',
      },
    }
  }
  ```
  </pre>
</ShowBlock>
