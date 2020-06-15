<script>
  import ChevronIcon from './icons/chevron.svelte';
</script>

<section class="steps">
  <div class="step">
    <h2>Step 1</h2>
    <p>
      Easy to get started.<br>
      Just run:
    </p>
    <code>
      <pre>
        $ npm install industrial-ui -D
      </pre>
    </code>
    <p>* Save as dev dependency because there is no run-time!</p>
  </div>
  <ChevronIcon />

  <div class="step">
    <h2>Step 2</h2>
    <p>Configure with your own styles:</p>

    <code>
      <pre>
const config = &#123;
  stylesheets: ['./my-stylesheet.css'],
  components: &#123;
    button: &#123;
      class: 'my-own-class',
    &#125;,
  &#125;,
&#125;;
      </pre>
    </code>
    <p>
      * For more information about configuration, read
      <a href="/docs/configuration">documentation</a>
    </p>
  </div>
  <ChevronIcon />

  <div class="step">
    <h2>Step 3</h2>
    <p>
      And then, use in Svelte:
    </p>
    <code>
      <pre>
&lt;script&gt;
  import &#123;IUI, Button&#125; from 'industrial-ui';
  import config from './my-config.js';
&lt;/script&gt;

&lt;IUI &#123;config&#125;&gt;
  &lt;Button&gt;
    Hello, world!
  &lt;/Button&gt;
&lt;/IUI&gt;
      </pre>
    </code>
    <p>
      * For usage with another libraries, see
      <a href="/docs/installation">installation guide</a>
    </p>
  </div>
</section>

<style>
  section {
    padding-top: 40px;
    padding-bottom: 40px;
    background: #6C6EE5;
  }

  .step {
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    padding: 15px;
    background: white;
  }

  .step h2 {
    font-size: 22px;
    color: #6C6EE5;
    text-transform: uppercase;
  }

  .step p {
    font-size: 13px;
    color: #1E1F72
  }

  .step code {
    width: 100%;
    color: #F168B4;
  }

  .step code pre {
    overflow-x: auto;
  }

  @media screen and (min-width: 480px) and (max-width: 1023px) {
    .step {
      width: 60%;
    }
  }
</style>
