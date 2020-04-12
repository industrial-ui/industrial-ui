<script>
  import getHashLink from '../_helpers/get-hash-link';

  export let path = '';
  export let hash = '';
</script>

<a href="{getHashLink(path, hash)}">
  <slot />
</a>
