<script lang="ts">
  	import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';
	import { typewriter, messages } from '$lib/components/home_msgs.ts';

	const isMobile = new IsMobile();
	const desktopWidth: number = 65;
	const mobileWidth: number = 97;
	let i = $state(-1);

	$effect(() => {
		let isFirst = true;
		let interval = setInterval(() => {
			i += 1;
			i %= messages.length;
			
			if (isFirst) {
				isFirst = false;
				clearInterval(interval);
				setTimeout(() => {
					let newInterval = setInterval(() => {
						i += 1;
						i %= messages.length;
					}, 2800);
					// Store for cleanup
					interval = newInterval;
				}, 300);
			}
		}, 300);

		return () => {
			clearInterval(interval);
		};
	});

	function scrollDown() {
		window.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth'
		});
	}
</script>

<div class="flex flex-col min-h-screen items-start justify-start px-5 mx-auto"
	style="max-width: {isMobile.current ? mobileWidth + '%' : desktopWidth + '%'};">
	<div
	class="flex {isMobile.current ? 'flex-col' : 'flex-row'}"
	>
		<div class="{isMobile.current ? "pt-45" : "pt-90 min-w-100"}">
			<h1 class="text-2xl font-normal tracking-tight text-left">
				Hi, I'm Sean
			</h1>
			<div class="min-h-[3em] text-l">
				{#key i}
				<p in:typewriter={{ speed: 5 }}>
					{messages[i] || ''}
				</p>
				{/key}
			</div>
		</div>
		<div class="{isMobile.current ? "pt-5" : "pt-65"}">
			<h1 class="text-2xl font-normal tracking-tight text-left">
				I be another div
			</h1>
		</div>
	</div>
	<div class="flex justify-center w-full {isMobile.current ? "mb-40" : "mb-20"} mt-auto">
		<svg 
			class="w-12 h-12 animate-bounce cursor-pointer focus:outline-none" 
			viewBox="0 0 24 24" 
			fill="none" 
			stroke="currentColor" 
			stroke-width="2" 
			stroke-linecap="round" 
			stroke-linejoin="round"
			onclick={scrollDown}
			role="button"
			tabindex="0"
			onkeydown={(e) => e.key === 'Enter' && scrollDown()}
		>
			<path d="M6 9l6 6 6-6"/>
		</svg>
	</div>
</div>

<div
  class="flex flex-col items-center justify-center min-h-50 pt-20 px-5 mx-auto"
  style="max-width: {isMobile.current ? mobileWidth + '%' : desktopWidth + '%'};"
>
	<div class="flex flex-col items-center pt-2 pb-8">
		<h3 class="scroll-m-20 font-light text-xl tracking-tight text-left pb-4">Current Role</h3>
		<p>
		Test Automation Software Engineer @
		<a
			href="https://www.impulsespace.com"
			class="underline text-inherit"
			target="_blank"
			rel="noopener noreferrer"
		>
			Impulse Space
		</a>
		</p>
	</div>
	<div class="flex flex-col items-center pt-2 pb-8">
		<h3 class="scroll-m-20 font-light text-xl tracking-tight text-left pb-4">Previous Roles</h3>
		<p class="pb-2">
		Lead Robotics Software Engineer @
		<a
			href="https://www.venhub.com"
			class="underline text-inherit"
			target="_blank"
			rel="noopener noreferrer"
		>
			Venhub Global
		</a>
		</p>
		<p class="pb-2">
		Medical Device R&D Intern @
		<a
			href="https://www.nventric.com"
			class="underline text-inherit"
			target="_blank"
			rel="noopener noreferrer"
		>
			Nventric
		</a>
		</p>
		<p class="pb-2">
		Mechanical Engineering Intern @
		<a
			href="https://www.soeffects.com"
			class="underline text-inherit"
			target="_blank"
			rel="noopener noreferrer"
		>
			Second Order Effects
		</a>
		</p>
	</div>
</div>

<div
  class="flex flex-col items-start justify-center min-h-screen px-5 mx-auto"
  style="max-width: {isMobile.current ? mobileWidth + '%' : desktopWidth + '%'};"
>
  <!-- <h3 class="scroll-m-20 text-2xl tracking-tight text-left">I'M WORKING ON IT!</h3> -->
</div>