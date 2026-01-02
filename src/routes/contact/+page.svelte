<script lang="ts">
  import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';

  const isMobile = new IsMobile();
  const desktopWidth: number = 65;
  const mobileWidth: number = 97;
</script>

<div
  class="flex flex-col items-start justify-center {isMobile.current ? 'min-h-100' : 'min-h-180'} px-5 mx-auto"
  style="max-width: {isMobile.current ? mobileWidth + '%' : desktopWidth + '%'};"
>
  <h1 class="text-l font-normal tracking-tight text-left">
    [PAGE UNDER CONSTRUCTION]
  </h1>
  <h1 class="text-2xl font-normal tracking-tight text-left">
    Contact Page
  </h1>
  <div class="min-h-[3em]">
  </div>

</div>