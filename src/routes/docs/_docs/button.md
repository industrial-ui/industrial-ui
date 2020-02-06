# Button

<script>
  import Button from '../../../ui/Button/index.svelte';
  import ShowBlock from '../_components/show-block.svelte';
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
  
  <pre class="prettyprint" slot="code">
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

  <pre class="prettyprint" slot="config">
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
