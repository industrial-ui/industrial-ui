<script>
import Title from '../_components/page-title.svelte';
</script>

<Title 
  title="Configuration"
  subtitle="Learn what one object is capable of"
/>

Here is the object that you can pass into the IUI wrapper. By default, it will
isolate the configuration, so it will be applied only in the child components.
With such behavior, you can add as much IUIs as you want.

<pre class="code">
```js
const config = {
  // Array of strings – the styles to add into <head>
  stylesheets: [],
  
  // Class that will be applied for all components
  globalClass: '',
  
  // object where key is a name of custom transition and the
  // function that defines this transition.
  // for more information, see https://svelte.dev/tutorial/custom-css-transitions
  customTransitions: {
    name: function(node, {delay, duration}) {}
  },

  // Object with components' configuration. Read more below.
  components: {
    dropdown: {
      // Transition for dropdown opening
      transition: null,
      transitionOptions: null,
      isProperties: {
        name: 'class-1 class-2',
      },

      class: '',
      openClass: '',
      closeClass: '',

      triggerClass: '',
      openTriggerClass: '',
      closeTriggerClass: '',

      dropdownClass: '',
      openDropdownClass: '',
      closeDropdownClass: '',
    },

    card: {},
  }
};
```
</pre>

Configuration of other components is explained in details their own page.

<h2 id="is-props">is:properties</h2>

is:properties add classes to component's wrapper (first-level element in the component)
dynamically, depending on the value given to it. For example, if you configure `Button` as:

<pre class="code">
```js
components: {
  button: {
    isProperties: {
      outline: 'outline',
      labeled: 'labeled',
      icon: 'round normal filled',
    }
  }
}
```
</pre>

Then you can use the button in such a way:


<pre class="code">
```html
<Button is:outline is:labeled>Trying example</Button>
<Button is:icon={false} is:outline="true">Cool thing</Button>
<Button is:primary={someReactiveVar}>Primary</Button>
```
</pre>


<h2 id="class">class</h2>

<h2 id="transition">transition</h2>
