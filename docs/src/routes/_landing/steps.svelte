<script>
  import ChevronIcon from './icons/chevron.svelte';
  import CirclesIcon from './icons/steps-circles.svelte';
</script>

<section class="steps">
  <CirclesIcon />

  <div class="step">
    <div class="step-head">
      <h2>Step 1</h2>
      <ChevronIcon />
    </div>
    <p>
      Easy to get started.<br>
      Just run:
    </p>
    <code>
      <pre>
        $ npm install industrial-ui -D
      </pre>
    </code>
    <p class="help">
      * Save as dev dependency because there is no run-time!
    </p>
  </div>
  <ChevronIcon />

  <div class="step second">
    <div class="step-head">
      <h2>Step 2</h2>
      <ChevronIcon />
    </div>
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
    <p class="help">
      * For more information about configuration, read
      <a href="/docs/configuration">documentation</a>
    </p>
  </div>
  <ChevronIcon />

  <div class="step">
    <div class="step-head">
      <h2>Step 3</h2>
    </div>
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
    <p class="help">
      * For usage with another libraries, see
      <a href="/docs/installation">installation guide</a>
    </p>
  </div>
</section>

<style>
  section {
    padding: 40px 0;
    background: #6C6EE5;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .step {
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    padding: 15px;
    background: white;
    position: relative;
    z-index: 3;
  }

  .step-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .step a {
    color: #6C6EE5;
  }

  :global(.step .chevron-icon) {
    display: none;
  }

  @media screen and (min-width: 480px) and (max-width: 1023px) {
    .step {
      width: 60%;
    }
  }

  @media screen and (min-width: 1024px) {
    :global(.chevron-icon) {
      display: none;
    }

    :global(.step .chevron-icon) {
      display: block;
      transform: rotate(-90deg);
      width: 26px;
      height: 26px;
    }

    section {
      display: flex;
      justify-content: center;
      padding: 130px 0;
    }

    .step {
      width: 400px;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 30px;
    }

    .step code {
      flex-grow: 1;
      font-size: 12px;
    }

    .step.second {
      margin: 0 30px !important;
    }

    .step h2 {
      font-size: 36px;
    }

    .step p {
      font-size: 22px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1179px) {
    .step {
      width: 300px;
    }
  }

  @media screen and (min-width: 1180px) and (max-width: 1279px) {
    .step {
      width: 350px;
    }
  }
</style>
