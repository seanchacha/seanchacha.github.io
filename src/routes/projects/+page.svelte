<script lang="ts">
  import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';

  const isMobile = new IsMobile();
  const desktopWidth: number = 65;
  const mobileWidth: number = 97;
</script>

<div
  class="flex flex-col items-start justify-center {isMobile.current ? 'mt-10' : 'mt-20'} px-5 mx-auto"
  style="max-width: {isMobile.current ? mobileWidth + '%' : desktopWidth + '%'};"
>
  <div class="pb-4">
    <a href="/" class="hover:underline">
      &lt; Go back home
    </a>
  </div>
  <h1 class="text-l font-normal tracking-tight text-left">
    [PAGE UNDER CONSTRUCTION]
  </h1>
  <h1 class="text-2xl font-normal tracking-tight text-left">
    Projects Page
  </h1>
  <div class="min-h-[3em]">
  </div>

</div>