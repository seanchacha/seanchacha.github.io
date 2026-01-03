<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import linkedin from '$lib/assets/linkedin.svg';
  	import { ModeWatcher } from "mode-watcher";

	import MyNavbar from '$lib/components/MyNavbar.svelte';

	import SunIcon from "@lucide/svelte/icons/sun";
	import MoonIcon from "@lucide/svelte/icons/moon";
	
	import { toggleMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button/index.js";

  	import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';

	const isMobile = new IsMobile();

	let { children } = $props();
</script>

<ModeWatcher />

<div class="flex items-center px-4 py-2 sticky top-0 z-50 bg-background">
	<!-- favicon preview (decorative) -->
	<a href="/" class="favicon-container pl-2 pr-4 group" aria-label="Home">
		<img src={favicon} alt="Home — sean cha" class="h-8 w-8 object-contain favicon-wiggle" />
	</a>


	<MyNavbar />

	<!-- <div class="flex justify-center pl-3 pr-4"> -->
	<div class="{isMobile.current ? 'flex flex-column ml-auto pr-3' : 'flex flex-column absolute left-1/2 -translate-x-1/2'}">

		<div class="px-2">
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
		<div class="px-2 mt-0.5">
			<a href="https://www.linkedin.com/in/seung-whan-cha/" target="_blank" rel="noopener noreferrer">
				<img
					src={linkedin}
					alt="LinkedIn"
					class="h-8 w-8"
				/>
			</a>
		</div>
	</div>
</div>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<style>
	@keyframes wiggle {
		0%, 100% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(-10deg);
		}
		75% {
			transform: rotate(10deg);
		}
	}
	
	.favicon-wiggle {
		transition: transform 0.3s ease-in-out;
	}
	
	.group:hover .favicon-wiggle {
		animation: wiggle 0.5s ease-in-out;
	}
</style>