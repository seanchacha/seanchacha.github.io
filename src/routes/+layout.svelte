<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
  	import { ModeWatcher } from "mode-watcher";

	import MyNavbar from '$lib/components/MyNavbar.svelte';

	import SunIcon from "@lucide/svelte/icons/sun";
	import MoonIcon from "@lucide/svelte/icons/moon";
	
	import { toggleMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button/index.js";

	let { children } = $props();
</script>

<ModeWatcher />

<div class="flex items-center px-4 py-2">
	<!-- favicon preview (decorative) -->
	<div class="favicon-container pl-2 pr-4" aria-hidden="true">
	<img 
		src={favicon}
		alt="favicon"
		class="h-8 w-8 object-contain" />
	</div>

	<MyNavbar />

	<Button onclick={toggleMode} variant="outline" size="icon">
	<SunIcon
		class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
	/>
	<MoonIcon
		class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
	/>
	<span class="sr-only">Toggle theme</span>
	</Button>
</div>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
