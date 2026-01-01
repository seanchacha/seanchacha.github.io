<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
  	import { ModeWatcher } from "mode-watcher";

	import MyNavbar from '$lib/components/MyNavbar.svelte';

	let { children } = $props();
</script>

<ModeWatcher />

<!-- favicon preview (decorative) -->
<div class="favicon-container" aria-hidden="true">
  <img src={favicon} alt="favicon preview" class="favicon-image" />
</div>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<MyNavbar />

{@render children()}
