
# Svelte-iui example

The template of the Svelte app is based on 
[sveltejs/component-template](https://github.com/sveltejs/component-template).

If you have a *rollup-plugin-svelte* or *svelte-loader*, it is easy to load
the Industrial-ui components, just import them into the project!

```html
<script>
	import {Dropdown, IUI, Button} from 'industrial-ui';
</script>

<IUI>
  <Dropdown id="my-drop" openOnHover>
    <div slot="trigger">
      Toggle the dropdown
    </div>
    <div>Well.. Hello, world!</div>
  </Dropdown>

  <Button>
    This is a button from IUI
  </Button>
</IUI>
```

And don't forget to customize the [configuration](http://localhost:3000/docs/configuration) of Industrial-ui!
