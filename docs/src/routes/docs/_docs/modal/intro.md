<script>
import Title from '../../_components/page-title.svelte';
</script>

<Title
  id="examples"
  title="Modal"
  subtitle="Modal window with an overlay"
/>

Modal window is a container that displays over the current page. It implements most needed logic:
* Open window over the current page with an overlay
* Blocks page scroll and actions on anything below modal
* Provides transition for smooth opening
* Can be closed either by clicking on overlay, pressing escape key or pressing the support button or close icon
* Can be moved to become the document.body child.
