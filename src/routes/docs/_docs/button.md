# Button

<script>
  import Button from '../../../ui/Button/index.svelte';
</script>

<Button>Hello</Button>
<Button class="special" is:outline is:icon>Trying example</Button>
<Button title="some" is:icon={false} is:outline="false">Cool thing</Button>
