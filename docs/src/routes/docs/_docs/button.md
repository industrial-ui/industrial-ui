<script>
import Title from '../_components/page-title.svelte';
import {Button} from 'industrial-ui';
import ShowBlock from '../_components/show-block.svelte';
</script>

<Title 
  title="Button"
/>

Here is how simply you can use the button in pair with *semantic-ui* library 
or any other stylesheets.

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

  <pre class="code" slot="config">
  ```javascript
  const config = {
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
  };
  ```
  </pre>
</ShowBlock>
