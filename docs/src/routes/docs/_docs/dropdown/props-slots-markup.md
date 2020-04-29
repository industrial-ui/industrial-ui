<h2 id="props">Props</h2>

<div class="table">
  | Prop name | Type | Default | Description |
  |-----------|:----:|:-------:|-------------|
  | `value` | `Boolean` | `false` | Handles the open/close state of the dropdown |
  | `id` | `String` | `''` | **id** of the dropdown (not wrapper). It is advised to put the **id** if you have more than 1 dropdown on the page |
  | `openOnHover` | `Boolean` | `false` | If `true`, will open dropdown on *mouseenter* and close on *mouseleave* |
  | `triggerClass` | `String` | `''` | Trigger (opener element that should be clicked) class |
  | `dropdownClass` | `String` | `''` | Dropdown class |
  | `transition` | `String` | `null` | Transition applied for the dropdown (it is better to put in the config but not as a prop) |
  | `transitionOptions` | `Object` | `null` | Transition object that defines, for example, delay and duration of how a dropdown will be anumated |
  | `position` | `String` | `null` | Position of the dropdown. Requires `position: absolute` for it. One of `'auto', 'bottom left', 'bottom right', 'top left', 'top right'` |
</div>


<h2 id="configuration">Configuration</h2>

For detailed explanation on the global configuration and common properties like
`isProperties`, `transition` and others, see the <a href="/docs/configuration">configuration</a> page.

<pre class="code">
  ```js
  {
    components: {
      dropdown: {
        // For this block of properties you can see more information in the configuration page
        transition: null, // The name of opening transition
        transitionOptions: null, // Options like duration or delay
        isProperties: {}, // Dynamically added classes like is:search
        
        // The classes passes to the dropdown wrapper
        class: '',
        openClass: '', // Class will be applied when the dropdown is open
        closeClass: '', // Class will be applied when the dropdown is closed
        
        // Trigger is what you click (or hover) on to open the dropdown. Also has open and close state classes
        triggerClass: '',
        openTriggerClass: '',
        closeTriggerClass: '',
        
        // The dropdown itself with open and close state classes
        dropdownClass: '',
        openDropdownClass: '',
        closeDropdownClass: '',
      }
    }
  }
  ```
</pre>

<h2 id="slots">Slots</h2>

Named children of the dropdown. It has a *trigger* (opener) and the *dropdown* (what is opened) itself. For the
sake of such stylesheet libraries (see the **search dropdown** example for the **Semantic UI** stylesheet) which
use the `.dropdown > input` query selectors in their **.css** files, you can use different slots that do not
produce extra markup, but also have less logic behind.

<div class="table">
  | Slot name | Props | Description |
  |-----------|-------|-------------|
  | `default` | `close()`, `open()`, `value` | The elements of the slot are be rendered in special dropdown-menu wrapper with proper transitions, classes and positioning. With functions `close` and `open` you can manipulate the state of it. |
  | `trigger` |  | Trigger elements open the dropdown are rendered in the wrapper with proper classes and open-close logic. So, this is what you have to touch or click in order to trigger `open()` function |
  | `nowrap-trigger` |  | Trigger without any wrapper if you don't need extra markup. Be careful, because the responsibility to open or close the dropdown is fully on you. `value` property is the state of the dropdown.  |
  | `nowrap-dropdown` |  | Dropdown without extra markup. Has no support for transitions or positioning. |
</div>


<h2 id="markup">Resulting markup</h2>


Imagine the simplest dropdown's code:

<pre class="code">
  ```html
    <Dropdown id="my-dropdown">
      <div slot="trigger">
        <Button>Toggle me</Button>
      </div>
      
      Hello
    </Dropdown>
  ```
</pre>

The code above will produce the following markup:

<pre class="code">
  ```html
    <div class="your wrapper config-classes">
      <div class="trigger config-class">
        <button type="button">Toggle me</button>
      </div>
      <div class="dropdown config-class" id="my-dropdown">Hello</div>
    </div>
  ```
</pre>

But you can also create a no-wrapper dropdown. **Attention:** read the **slots** section above
to understand what does it mean to not create extra markup and what logic will you loose.

<pre class="code">
  ```html
    <Dropdown let:close let:open let:value>
      <input
        slot="nowrap-trigger"
        placeholder="Type something"
        class="search"
        on:focus={() => open()}
        on:blur={() => close()}
      />
    
      <div 
        slot="nowrap-dropdown"
        class="menu" 
        class:visible={value} 
        on:click="{() => close()}"
      >
        Hello
      </div>
    </Dropdown>
  ```
</pre>

The resulting markup for non-wrapping case is:

<pre class="code">
  ```html
    <div class="config-classes">
      <input class="search" placeholder="Type something"> 
      <div class="menu">Hello</div>
    </div>
  ```
</pre>
