<script lang="ts">
  import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';
  import svelteMachine from '$lib/assets/blogs/this-site/svelteMachine.png';
  import dogs1 from '$lib/assets/dogs1.jpeg';

  const isMobile = new IsMobile();
  const desktopWidth: number = 65;
  const mobileWidth: number = 97;

  const items = [
    { text: 'How I Built and Hosted this Site for Free', href: '/blogs/this-site', image: svelteMachine },
    { text: 'My Other Post', href: '/blogs/life', image: dogs1 },
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
  <div class="my-6 w-full {isMobile.current ? 'flex flex-col gap-2 max-w-80 mx-auto' : 'flex flex-wrap gap-2 max-w-120'}">
    {#each items as item}
      <a 
        href={item.href} 
        class="px-4 py-3 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors {isMobile.current ? 'w-full' : 'w-[calc(50%-0.25rem)]'}"
      >
        <img 
          src={item.image || "/placeholder.jpg"} 
          alt={item.text}
          class="w-full h-32 object-cover rounded-md mb-2"
        />
        {item.text}
      </a>
    {/each}
  </div>
</div>
