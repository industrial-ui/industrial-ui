<h2 id="props">Props</h2>

<div class="table">
  | Prop name | Type | Default | Description |
  |-----------|:----:|:-------:|-------------|
  | `value` | `Boolean` | `false` | Handles the open/close state of the dropdown |
  | `id` | `String` | `''` | **id** of the dropdown (not wrapper). It is advised to put the **id** if you have more than 1 dropdown on the page |
</div>


<h2 id="configuration">Configuration</h2>

For detailed explanation on the global configuration and common properties like
`isProperties`, `transition` and others, see the <a href="/docs/configuration">configuration</a> page.

<pre class="code">
  ```js
  {
    components: {
      modal: {
        // For this block of properties you can see more information in the configuration page
        transition: null, // The name of opening transition
        transitionOptions: null, // Options like duration or delay
        isProperties: {}, // Dynamically added classes like is:search
        
        // The classes passes to the dropdown wrapper
        class: '',
      }
    }
  }
  ```
</pre>

<h2 id="slots">Slots</h2>

Named children of the modal.

<div class="table">
  | Slot name | Props | Description |
  |-----------|-------|-------------|
  | `default` | `close()`, `open()`, `value` | . |
</div>


<h2 id="markup">Resulting markup</h2>


Imagine the simplest dropdown's code:

<pre class="code">
  ```html
    <Modal />
  ```
</pre>

The code above will produce the following markup:

<pre class="code">
  ```html
    <div class="your wrapper config-classes">
    </div>
  ```
</pre>

But you can also create a no-wrapper dropdown. **Attention:** read the **slots** section above
to understand what does it mean to not create extra markup and what logic will you loose.

<pre class="code">
  ```html
    <Modal />
  ```
</pre>

The resulting markup for non-wrapping case is:

<pre class="code">
  ```html
    <div class="config-classes">
    </div>
  ```
</pre>
