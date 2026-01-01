<script lang="ts">
 import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.ts";
 import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
 import type { HTMLAttributes } from "svelte/elements";
 
 import { IsMobile } from "$lib/hooks/is-mobile.svelte.js";
 
 const isMobile = new IsMobile();
</script>
 
<NavigationMenu.Root viewport={isMobile.current}>
 <NavigationMenu.List class="flex-wrap">
  <NavigationMenu.Item>
   <NavigationMenu.Link>
    {#snippet child()}
     <a href="/contact" class={navigationMenuTriggerStyle()}>Contact</a>
    {/snippet}
   </NavigationMenu.Link>
  </NavigationMenu.Item>
  <NavigationMenu.Item>
   <NavigationMenu.Trigger>Blogs</NavigationMenu.Trigger>
   <NavigationMenu.Content>
    <ul class="grid w-[200px] gap-4 p-2">
     <li>
      <NavigationMenu.Link href="/blogs/">All</NavigationMenu.Link>
      <NavigationMenu.Link href="/blogs/first-post">Post 1</NavigationMenu.Link>
      <NavigationMenu.Link href="/blogs/second-post">Post 2</NavigationMenu.Link>
     </li>
    </ul>
   </NavigationMenu.Content>
  </NavigationMenu.Item>
 </NavigationMenu.List>
</NavigationMenu.Root>