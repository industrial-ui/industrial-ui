<script>
import Title from '../../_components/page-title.svelte';
</script>

<Title 
  title="Configuration"
  subtitle="Learn what one object is capable of"
/>

Industrial-ui powerful configuration allows you to add styles and animations to
components. Spend some time on it and get exactly the same result as designer
created. And with all functionality and logic inside. 

<h2 id="config">Config</h2>

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
      
      // Component wrapper's class and the classes of its states (open or close)
      class: '',
      openClass: '',
      closeClass: '',
      
      // Following are classes for children of the component
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

`is:properties` add classes to component's wrapper (first-level element in the component)
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

Then you can use the button in following ways:

<pre class="code">
```html
<Button is:outline is:labeled>Trying example</Button>
<Button is:icon={false} is:outline="true">Cool thing</Button>
<Button is:primary={someReactiveVar}>Primary</Button>
```
</pre>


<h2 id="class">class</h2>

`class` adds the class for a root element of the component. Composing different
configuration properties, you can end by having the actual component's
root element with classes created following the formula:

<pre class="code">
```javascript
class = global_class_from_config + default_class_from_config + class attribute + is:Properties_if_truthy_and_configured
```
</pre>

Where: 
* `global_class_from_config` is `config.globalClass` (*config* is the object explained earlier)
* `default_class_from_config` is `config.components[componentName].class`
* class attribute is simple reactive `class="some-class"`
* `is:Properties_if_truthy_and_configured` means your `is:properties` that are configured and used properly as explained earlier

<h2 id="transition">transition and transitionOptions</h2>

Some components like Dropdown or Modal might have a transition inside of it. To get control out
of it, configure default `transition` and `transitionOptions` in the component's settings.
You are allowed to have transition as:

`transition: 'fade'|'fly'|'slide'|string`

Where `string` represents the name of a custom transition defined in the `config.customTransitions` object by following 
<a href="https://svelte.dev/tutorial/custom-css-transitions" target="_blank" rel="noopener noreferrer">Svelte documentation</a>
on writing it. Also, the `transitionOptions` are discussed in the same Svelte tutorial.
