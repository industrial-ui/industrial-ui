# Button

<script>
  import Button from '../../../ui/Button/index.svelte';
</script>

<Button>Hello</Button>
<Button class="special" is:outline is:icon>Trying example</Button>
<Button title="some" is:icon={false} is:outline="false">Cool thing</Button>
<Button title="some" is:primary>Primary</Button>
<Button title="some" is:labeled>
  <div class="ui red button">
    Likes
  </div>
  <span class="ui basic red left pointing label">
    1,048
  </span>
</Button>
