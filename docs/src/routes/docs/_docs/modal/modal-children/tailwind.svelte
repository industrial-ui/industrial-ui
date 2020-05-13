<script>
  import {Button} from 'industrial-ui';
</script>

<h2 class="font-bold text-xl mb-2">Modal header</h2>
<p class="text-gray-700 text-base">Some text about this awesome component</p>

<div class="flex justify-end mt-4">
  <slot />
  <div
    class="bg-red-200 cursor-pointer font-semibold py-2 px-6 rounded inline-flex items-center"
    on:click
  >
    Close
  </div>
</div>
