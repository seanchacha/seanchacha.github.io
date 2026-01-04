<script lang="ts">
  import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';
  import svelteMachine from '$lib/assets/blogs/this-site/svelteMachine.png';
  import dogs1 from '$lib/assets/dogs1.jpeg';

  import AllPosts from '$lib/components/AllPosts.svelte';

  const isMobile = new IsMobile();
  const desktopWidth: number = 50;
  const mobileWidth: number = 97;
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
  All Posts
  </h1>
  <AllPosts/>
</div>
