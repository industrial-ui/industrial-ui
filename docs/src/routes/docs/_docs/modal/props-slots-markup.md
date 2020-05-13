<h2 id="props">Props</h2>

<div class="table">
  | Prop name | Type | Default | Description |
  |-----------|:----:|:-------:|-------------|
  | `value` | `Boolean` | `false` | Handles the open/close state of the modal |
  | `id` | `String` | `''` | **id** of the wrapper (not modal container) |
  | `overlayClass` | `String` | `''` | Dynamic class to be applied to overlay **dialog** tag |
  | `bodyClass` | `String` | `''` | Class that applies to **document.body** |
  | `transition` | `String` | `null` | Name of transition to apply on modal open/close behavior |
  | `transitionOptions` | `Object` | `null` | Object of transition options. Read more in configuration page |
  | `mockConfig` | `Object` | `null` | Configuration object to use instead of global one |
  | other props | `Any` | | Any HTML attribute that will be applied to modal container |
</div>


<h2 id="configuration">Configuration</h2>

For detailed explanation on the global configuration and common properties like
`isProperties`, `transition` and others, see the <a href="/docs/configuration">configuration</a> page.

<pre class="code">
  ```js
  {
    components: {
      modal: {
        // Transition options. See more in configuration page
        transition: null,
        transitionOptions: {delay: 0, duration: 300},
        
        // Conditional properties, see configuration page for more details
        isProperties: {},
        
        // Append modal window to body or not
        moveToBody: true,
        
        // When opened, block scroll on body or not (with overflow: hidden)
        blockBodyScroll: true,
        
        // Modal container class, in open and closed states
        class: '',
        openClass: '',
        closeClass: '',
        
        // Overlay is the modal wrapper (tag dialog), in open and closed states
        overlayClass: '',
        openOverlayClass: '',
        closeOverlayClass: '',
        
        // document.body classes, in open and closed states
        bodyClass: '',
        openBodyClass: '',
        closeBodyClass: '',
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
  | `default` | `close()`, `open()`, `value` | Default slot where you put all modal content |
  | `close` |  | Slot inside of modal. Usually used for close buttons with `position:absolute` |
  | `in-overlay` |  | Slot inside of overlay but outside of modal |
</div>


<h2 id="markup">Resulting markup</h2>


Here is the simples modal window code:

<pre class="code">
  ```html
    <Modal />
  ```
</pre>

The code above will produce the following markup:

<pre class="code">
  ```html
    <dialog>
      <div />
    </dialog>
  ```
</pre>

And if you add some slots and classes like so: 

<pre class="code">
  ```html
    <Modal class="modal" overlayClass="overlay">
        <div slot="in-overlay" class="outsider" />
        <div slot="close" class="insider" />
        <section>Content</section>
    </Modal>
  ```
</pre>

It can result in the following markup:

<pre class="code">
  ```html
    <dialog class="overlay">
      <div class="outsider" />
      <div class="modal">
        <div class="insider" />
        <section>Content</section>
      </div>
    </dialog>
  ```
</pre>
