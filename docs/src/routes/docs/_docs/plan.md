<script>
import Title from '../_components/page-title.svelte';
</script>

<Title 
  title="Development plan"
  subtitle="The roadmap for the best component library ever"
/>

The page is also a checklist with, hopefully, estimate dates for different project
development parts. Should be updated rapidly. Waiting for it to become all in green
check marks.

<h2 id="create">✅ Create project and documentation</h2>

This huge step has been done some time ago before the plan creation. First of all,
the project architecture was chosen: Svelte for the library and Svelte + Sapper for
the documentation. Documentation took the biggest amount of time because of the
need to add a *markdown* and a *code highlighting* support. Writing markup (good markup)
is also a time-consuming process: all html-elements were styled for the future add-and-go
development experience. Mobile adaptivity is a huge part of a big documentation. Though
the worst part is left behind, there are places that should be fixed or filled in
the future. 


<h2 id="dropdown">Dropdown</h2>

The huge part. Because this is the first component created, a lot of utils were needed.
Like a philosophical component, it went through many cycles of *think -> create -> think again
-> refactor.*

* ✅ Add a base markup for the dropdown
* ✅ Create a template for the configuration JSON
* ✅ Create a IUI-wrapper container that keeps the config as a store
* ✅ Implement `isProperties` feature in configuration
* ✅ Implement all class passings into the component
* ✅ Filter all incoming properties
* ✅ Implement dropdown logic
* ✅ Add dynamic transitions
* ✅ Implement `click-outside` function for the dropdown
* ✅ Dispatch all dropdown events into the parent
* ✅ Add a lot of examples for the documentation
* ✅ Add table for properties and make styles for it
* ✅ Implement dropdown openings to different directions (positioning)
* ✅ Add more slots to a dropdown and document it properly
* ✅ Take the stylesheet changing out of the ShowBlock to header
* ✅ Write docs for 'resulting markup' (maybe new icon in ShowBlock)
* ❌ Show IUI dropdown usage with different stylesheets (Spectre, Tailwind)


<h2 id="vue-react-support">Vue and React support</h2>

Really difficult part of the project, because it requires searching for
different open-source solutions and updating them. For example, we need to
import the **Dropdown** component into the React and Vue frameworks without
any special loss in functionality. The **Dropdown** has two *slots*, 
but the existing solutions do not support slots at all. And I have really
forgot React, so more investigations needed.

* ❌ Install the library locally with the simple svelte project to check accessibility
* ❌ Make a React solution for importing Svelte components (with nice API and full functionality)
* ❌ Create an example React app inside documentation that would show the working code
* ❌ The same with Vue. A solution needed
* ❌ And the Vue app example needed

These steps might be broken into smaller once when I will start digging into it.


<h2 id="npm-publish">NPM publishing and peer review</h2>

* ❌ Refactor the project for docs to import UMD-format compiled library
* ❌ Publish project to npm
* ❌ Test the npm library and investigate the versioning. Make a release and create `changelog`
* ❌ Send the library to some Svelte-working dudes and do a peer review
* ❌ Fix most annoyed problems listed by the people

<h2 id="other-components">Other components</h2>

The list is not full and the order means nothing

* ❌ Modal window
* ❌ Tab
* ❌ Button
* ❌ TextField
* ❌ RadioGroup
* ❌ CheckboxGroup
* ❌ Calendar
* ❌ Snackbar
* ❌ Progress
* ❌ Tooltip
* ❌ Accordion

<h2 id="release">Release</h2>

The way to show Industrial-ui to a broad public, make it popular.

* ❌ Complete the documentation by writing more examples and re-reading
* ❌ Write a proper and nice readme
* ❌ Ask a designer to prepare some pictures and logos for the library
* ❌ Make a peer-review with friends and ask for the first stars in repo
* ❌ Write an article in Russian to post to Habr
* ❌ Write an article in English to post to Medium Daily JS
* ❌ Add a feedback for to the documentation website
* ❌ Do a release: create new version, push to NPM, publish articles
* ❌ PR a library in different websites
* ❌ Get a feedback, fix the library. Do it again and again

### Enjoy, the project is done! Though keep maintaining it
