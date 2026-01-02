<script lang="ts">
  import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';

  const isMobile = new IsMobile();
  const desktopWidth: number = 65;
  const mobileWidth: number = 97;

  const items = [
    { text: 'How I Built and Hosted this Site for Free', href: '/blogs/this-site' },
    { text: 'My Other Post', href: '/blogs/life' },
  ];
</script>

<div
  class="flex flex-col items-start justify-start {isMobile.current ? 'mt-10' : 'mt-20'} px-5 mx-auto"
  style="max-width: {isMobile.current ? mobileWidth + '%' : desktopWidth + '%'};"
>
  <div class="pb-4">
    <a href="/" class="hover:underline">
      &lt; Go back home
    </a>
  </div>
  <h1 class="text-2xl font-normal tracking-tight text-left">
    All Posts Page
  </h1>
  <ul class="my-6 ms-6 list-disc [&>li]:mt-2">
    {#each items as item}
      <li>
        <a href={item.href} class="hover:underline">
          {item.text}
        </a>
      </li>
    {/each}
  </ul>
</div>