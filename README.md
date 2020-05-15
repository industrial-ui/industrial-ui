# Industrial-ui
*Industry-oriented library of unstyled UI-components.*

Here is the short description. Please, refer to
[full documentation](https://industrial-ui.com/)
about all features of Industrial-ui.

## Problem

In industry, front-end developers either write all markup by themselves, or they
get an archive with the markup and styles for some project from the
designer who also does it or from an out-source markupper. 

If you do it on your own, you are most probably interested in creation of the
logic of an application, and the process of making components from project to
project annoys you. Many companies have their own UI-library, but its implementation
is time-consuming and expensive.

On the other hand, if you get the markup, you have to change all the styles in your
copy-pasted components from previous projects, and you waste a lot of time on
doing so instead of real front-end stuff!

Just imagine a case: the studio AlphaCoders gets a technical description of some new
project from a random customer. They perform requirements elicitation, make a prototype
and so on. Design in this company is done by a person with professional skills of any online
tool like Bootstrap studio, Webflow, Silex or other services for markup creation, so it makes
a static html and css. They, a frontenter like you gets an archive, look through the
code and realizes that some classes are repeated for different blocks. You rapidly begin
creation of the functional components by extracting these blocks in your favorite
framework. But what if I tell you that this step can easily be skipped?!

## Solution – Industrial-ui

Whether you use Svelte, React or Vue (other libraries support will come later), [install](https://industrial-ui.com/docs/installation)

```bash
  npm install industrial-ui
```

Now you have a library of fully-functional UI-components but with no styles at all!
Pure logic and nothing more. The styles will be added by you via extracting them from
markup's classes, or you can easily create them for the components. Let's take a look
at the Svelte example:

```html
<script>
  import {IUI, Button} from 'industrial-ui';
  const config = {}; 
</script>

<IUI {config}>
  <Button>Hello, world!</Button>
</IUI>
```

You will see the button naked like in good-old nineties. Let's imagine we don't have
company's own markup, but instead we use Tailwind CSS. That is how easy it is to
integrate it's CDN styles with Industrial-ui. Just [configure](https://industrial-ui.com/docs/configuration):

```javascript
  const config = {
    stylesheets: ['https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'],
    components: {
      button: {
        class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center'
      }
    }
  };
``` 

The IUI usage above will be transformed into a nice-looking Button with all the
logic behind.

## License

This project is licensed under the terms of the [MIT license](https://github.com/VanishMax/industrial-ui/blob/master/LICENSE).
