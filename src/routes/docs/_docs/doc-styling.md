<script>
import Title from '../../_components/page-title.svelte';
</script>

<Title 
    title="Example of stylization"
    subtitle="This is how documentation can be represented in a nice way"
/>

<h1 id="headings" class="first">Headings</h1>

# H1

## H2

### H3

<h1 id="simple-text">Simple text</h1>

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat 
cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.

<h1 id="lists">Lists</h1>

* Point number one
* Point number two very long and boring so no one
will ever ever read this till the end. Please, stop
this nonsense or i will have to do some actions
that will cause mutations in the store. Do you really
want it?
* Point number three

<h1 id="text-types">Text types</h1>

*Italic text always looks nice*

**Bold text relies on your opinion**

***Bold and italic - what a combination!***

<a href="/docs/doc-styling#headings">This is a link to headings</a>

<h1 id="code">Code</h1>

Code inside the text `Look at me, i am a code` should 
look good

<pre class="prettyprint">
```html
<script>
  export let myVar = 'Hello, world!';
</script>

<button type="button">
  {myVar}
</button>
```
</pre>

And, i guess, this was the biggest part
