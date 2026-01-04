<script lang="ts">
  import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';
  import svelteMachine from '$lib/assets/blogs/this-site/svelteMachine.png';
  import dogs1 from '$lib/assets/dogs1.jpeg';

  const isMobile = new IsMobile();

  const items = [
    { label: 'Phone', text: '(213) 505-0769' , href: null},
    { label: 'Email', text: 'seungwcha@gmail.com', href: null },
    { label: 'Resume', text: 'Click here', href: "https://drive.google.com/file/d/10YZICmNcw1uLvkIORbsS7znNG63yWNEf/view?usp=sharing" }
  ];
</script>

<div class="my-6 w-full justify-center {isMobile.current ? 'flex flex-col gap-2 max-w-80 mx-auto' : 'flex flex-wrap gap-2'}">
  {#each items as item}
      {#if item.href}
          <a 
          href={item.href} 
          class="text-center {isMobile.current ? 'w-full' : 'flex-1 min-w-[200px] max-w-10'}"
          target="_blank"
          rel="noopener noreferrer"
          title="Sean resume"
          >
          {item.label}
          <br />
          <p class="underline">{item.text}</p>
          </a>
      {:else}
          <div 
          class="text-center {isMobile.current ? 'w-full' : 'flex-1 min-w-[200px] max-w-10'}"
          >
          {item.label}
          <br />
          {item.text}
          </div>
      {/if}
  {/each}
</div>