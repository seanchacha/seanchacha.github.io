<script lang="ts">
  import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';
  const isMobile = new IsMobile();
</script>

<div
  class="flex flex-col items-start justify-center min-h-screen px-5 mx-auto"
  style="max-width: {isMobile.current ? '95%' : '75%'};"
>
  <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight text-left">
    UNDER CONSTRUCTION! MIGRATING TO SVELTE SITE, IN PROGRESS!
  </h3>
  <p class="mt-4 text-left">
    Sorry for the inconvenience. Please check back later for updates.
  </p>
</div>

<div
  class="flex flex-col items-start justify-center min-h-screen px-5 py-120 mx-auto"
  style="max-width: {isMobile.current ? '95%' : '75%'};"
>
  <h3 class="scroll-m-20 text-2xl tracking-tight text-left">I SAID IM WORKING ON IT!</h3>
</div>