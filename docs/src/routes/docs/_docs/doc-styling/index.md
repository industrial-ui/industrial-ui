<script>
import Title from '../../_components/page-title.svelte';
import {Button} from 'industrial-ui';
import ShowBlock from '../../_components/show-block.svelte';
</script>

<Title 
    title="Example of stylization"
    subtitle="This is how documentation can be represented in a nice way"
/>

<h2 id="headings" class="first">Headings</h2>

# H1

## H2

### H3

<h2 id="simple-text">Simple text</h2>

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat 
cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.

<h2 id="lists">Lists</h2>

* Point number one
* Point number two very long and boring so no one
will ever ever read this till the end. Please, stop
this nonsense or i will have to do some actions
that will cause mutations in the store. Do you really
want it?
* Point number three

<h2 id="text-types">Text types</h2>

*Italic text always looks nice*

**Bold text relies on your opinion**

***Bold and italic - what a combination!***

<a href="/docs/doc-styling#headings">This is a link to headings</a>

<h2 id="code">Code</h2>

Code inside the text `Look at me, i am a code` should 
look good

<pre class="code">
```html
<script>
  export let myVar = 'Hello, world!';
</script>

<button type="button">
  {myVar}
</button>
```
</pre>

<h2 id="showcase-block">Showcase block</h2>

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

  <pre class="code" slot="semantic">
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
  
    <pre class="code" slot="spectre">
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
  
    <pre class="code" slot="tailwind">
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

<h2 id="table">Table</h2>

<div class="table">
  | Prop name | Type | Default | Description |
  |-----------|:----:|:-------:|-------------|
  | col 1 | `String` | `''` | Some property |
  | col 2 | `Boolean` | `true` | Just property|
  | col 3 | `Number` | `353` | Khello |
</div>

And, i guess, this was the biggest part
