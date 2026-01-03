<script lang="ts">
  	import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';
	import { typewriter, messages } from '$lib/components/home_msgs.ts';
	import selfie1 from '$lib/assets/selfie1.jpg';
	import reggie1 from '$lib/assets/reggie1.jpg';
	import dogs1 from '$lib/assets/dogs1.jpeg';
	import venhub1 from '$lib/assets/venhub1.jpg';
	import mira1 from '$lib/assets/mira1.jpg';

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
	class="flex w-full {isMobile.current ? 'flex-col' : 'flex-row min-h-[70vh]'}"
	>
		<div class="{isMobile.current ? "pt-10" : "pt-90 min-w-100"}">
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
		<div class="flex-1 [@media(min-width:1500px)]:mx-[10%] [@media(min-width:2560px)]:mx-[20%]">
			<div class="{isMobile.current ? 'pt-5' : 'pt-65'}">
				<div class="relative w-full {isMobile.current ? 'h-[300px]' : 'h-[400px]'} mt-8">
					<img 
						src="{selfie1}" 
						alt="Description"
						class="absolute w-32 h-32 object-cover rounded-lg shadow-lg animate-float-1"
						style="top: 12px; {isMobile.current ? "left: 1%;" : "left: 5%;"} animation-delay: 0s;"
					/>
					<img 
						src="{reggie1}" 
						alt="Description"
						class="absolute w-32 h-32 object-cover rounded-lg shadow-lg animate-float-2"
						style="{isMobile.current ? "top: 150px; left: 10%;" : "top: 125px; left: 25%;"} animation-delay: 0s;"
					/>
					<img 
						src="{mira1}" 
						alt="Description"
						class="absolute w-32 h-32 object-cover rounded-lg shadow-lg animate-float-3"
						style="{isMobile.current ? "top: 1px; left: 30%;" : "top: 1px; left: 45%;"} animation-delay: 0s;"
					/>
					<img 
						src="{dogs1}" 
						alt="Description"
						class="absolute w-32 h-32 object-cover rounded-lg shadow-lg animate-float-4"
						style="{isMobile.current ? "top: 150px; left: 50%;" : "top: 130px; left: 65%;"} animation-delay: 0s;"
					/>
					<img 
						src="{venhub1}" 
						alt="Description"
						class="absolute w-32 h-32 object-cover rounded-lg shadow-lg animate-float-5"
						style="{isMobile.current ? "top: 15px; left: 60%;" : "top: 15px; left: 85%;"} animation-delay: 0s;"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="flex justify-center w-full {isMobile.current ? 'mb-50' : 'mb-20'} mt-auto">
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
  class="flex flex-col items-center justify-center min-h-50 {isMobile.current ? '' : 'pt-20'} px-5 mx-auto"
  style="max-width: {isMobile.current ? mobileWidth + '%' : desktopWidth + '%'};"
>
	<div class="flex flex-col items-center pt-2 pb-8">
		<h3 class="scroll-m-20 font-light text-xl tracking-tight text-center pb-4">Current Role</h3>
		<p class="text-center">
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
		<h3 class="scroll-m-20 font-light text-xl tracking-tight text-center pb-4">Previous Roles</h3>
		<p class="pb-2 text-center">
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
		<p class="pb-2 text-center">
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
		<p class="pb-2 text-center">
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

<style>
	@keyframes float {
		0%, 100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-5px);
		}
	}
	
	.animate-float-1 {
		animation: float 3s ease-in-out infinite;
	}
	
	.animate-float-2 {
		animation: float 2.5s ease-in-out infinite 0.5s;
	}
	
	.animate-float-3 {
		animation: float 1.8s ease-in-out infinite 1s;
	}
	
	.animate-float-4 {
		animation: float 3.2s ease-in-out infinite 1.5s;
	}
	
	.animate-float-5 {
		animation: float 2.5s ease-in-out infinite 2s;
	}
</style>