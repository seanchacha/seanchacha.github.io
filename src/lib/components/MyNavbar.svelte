<script lang="ts">
 import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.ts";
 import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
 
 import { IsMobile } from "$lib/hooks/is-mobile.svelte.js";
 
 const isMobile = new IsMobile();
</script>
 
<NavigationMenu.Root viewport={isMobile.current}>
 <NavigationMenu.List class="flex-wrap">
  <NavigationMenu.Item>
   <NavigationMenu.Link>
    {#snippet child()}
     <a href="/projects" class={navigationMenuTriggerStyle()}>Projects</a>
    {/snippet}
   </NavigationMenu.Link>
  </NavigationMenu.Item>
  <NavigationMenu.Item>
   <NavigationMenu.Trigger>Blogs</NavigationMenu.Trigger>
   <NavigationMenu.Content>
    <ul class="grid w-[200px] gap-4 p-2">
     <li>
      <NavigationMenu.Link href="/blogs/">ALL POSTS</NavigationMenu.Link>
      <NavigationMenu.Link href="/blogs/this-site">Build + Host this Site for Free</NavigationMenu.Link>
      <NavigationMenu.Link href="/blogs/life">Placeholder(?)</NavigationMenu.Link>
     </li>
    </ul>
   </NavigationMenu.Content>
  </NavigationMenu.Item>
 </NavigationMenu.List>
</NavigationMenu.Root>