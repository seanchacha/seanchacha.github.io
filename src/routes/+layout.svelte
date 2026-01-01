<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
  	import { ModeWatcher } from "mode-watcher";

	import MyNavbar from '$lib/components/MyNavbar.svelte';

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
</div>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
