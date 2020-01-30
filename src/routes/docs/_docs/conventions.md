# UI Conventions

In this topic we will discuss the philosophy behind the industrial-ui:
how to integrate components into your projects and then use it effectively.

## Stylisation

The worst part in using different ui-component libraries is that all of them
give you styles which, in most cases, you cannot override fully. Here the
situation is different. Industrial-ui is a library
of ***unstyled*** components and it means that you should have your own
styles to include and be good to go. And, usually, in industry you will be
provided with some *.css* files from a markup person. Freelancer, open source, 
outsource or yourself – doesn't matter while you just have to configure it and
go write cool front-end stuff without thinking about boring 'open-me-a-dropdown'
logic. 

You can perform style injection into industrial-ui by writing:

```js
const config = {
  styles: [
    'path/to/your/styles.css',
  ]
}
```

And then include configuration into the *IUI wrapper*:

```sveltehtml
<script>
  import IUI from 'industrial-ui';
  import config from './config.js';
</script>

<IUI {config}>
  <slot />
</IUI>
```

## Classes

There are plenty ways how to link components with the styles you have 
successfully provided. With the composition of them it is easy to
cover all possible style-cases.

### 1. config.class

With configuration you can change any component to look as pretty as you
want. Let's change *Button* component, for example. Type:

```js
const config = {
  // ... global options
  components: {
    // ... other components
  }
}
```

# TODO: рассказать про классы, но только красиво, блин!

***PROPOSALS***

* class = globalClass + config.class + class="..."
* is:Properties будет добавлять пару такие классы, какие задашь. Например,
is:icon добавит "round normal icon"
