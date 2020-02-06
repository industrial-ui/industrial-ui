<script>
import Title from '../_components/page-title.svelte';
</script>

<Title 
  title="UI Conventions"
  subtitle="The philosophy behind the industrial-ui: how components were developed"
/>

<h1 id="naming">Naming</h1>

`TODO:` All components follow the same naming rules, so it could be as easy as possible to
remember them to not check documentation each time you need a component.

<h1 id="ssr-compatibility">Full SSR Compatibility</h1>

Despite the fact that it is 2020, we introduce full SSR-compatibility in
order to reach minimal time of first paint and the best SEO-optimization.

<h1 id="framework-support">Vue and React support</h1>

Of course, each library could be rewritten to whatever framework you want,
but Svelte helps in developing the best product and, furthermore, it can
be ported into different frameworks such as React or Vue. So, every
component should be tested in different environments and fully documented.

<h1 id="styling">Styling</h1>

Logic of Industrial-ui provides all ways to manage styles you will ever need.
Take **any-ui-library-styles.css**, configure IUI, and you're good to go!
Basically, you don't need any other library, just one for any case.

Here how it looks like on example of the `Button` component. Configuration first:

<pre class="code">
```javascript
{
  globalClass: 'ui',
  components: {
    button: {
      class: 'btn',
      isProperties: {
        outline: 'outline',
        icon: 'round icon',
      },
    },
    card: {},
  }
}
```
</pre>

It means that each component will definitely get a *'ui'* class. Each `Button` 
component will take *'btn'* as a class and it will accept properties like 
`is:icon` which will give it the *'round icon'* class.

Full `Button` styling example:

<pre class="code">
```html
<Button class="some" is:icon is:outline={someBoolVar}>Cool button</Button>
```
</pre>

Notice the `is:outline` property. It accepts boolean variable and adds described in
the config class. Also, `class` property extends your default class. The formula for
outputted class for any of Industrial-ui component is:

<pre class="code">
```javascript
class = global_class_from_config + default_class_from_config + class attribute + is:Properties_if_truthy_and_configured
```
</pre>

<h1 id="event-dispatch">Event dispatching</h1>

`TODO:` Something about event dispatching

<h1 id="logic">Logic</h1>

`TODO:` And something about logic

<h1 id="slots">Slots are everywhere!</h1>

`TODO:` Slots are cool features that can really help you on the road of total customization
