<script lang="ts">
  import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';
  import svelteMachine from '$lib/assets/blogs/this-site/svelteMachine.png';
  import dogs1 from '$lib/assets/dogs1.jpeg';

  const isMobile = new IsMobile();

  const items = [
    { text: 'How I Built and Hosted this Site for Free', href: '/blogs/this-site', image: svelteMachine },
    { text: 'My Other Post', href: '/blogs/life', image: dogs1 }
  ];
</script>

<div class="my-6 w-full justify-center {isMobile.current ? 'flex flex-col gap-2 max-w-80 mx-auto' : 'flex flex-wrap gap-2'}">
{#each items as item}
    <a 
    href={item.href} 
    class="px-4 py-3 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors {isMobile.current ? 'w-full' : 'flex-1 min-w-[250px] max-w-10'}"
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