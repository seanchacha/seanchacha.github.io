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
					}, 3000);
					// Store for cleanup
					interval = newInterval;
				}, 500);
			}
		}, 500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div
  class="flex flex-col items-start justify-center min-h-180 px-5 mx-auto"
  style="max-width: {isMobile.current ? mobileWidth + '%' : desktopWidth + '%'};"
>
  <h1 class="text-2xl font-normal tracking-tight text-left">
    [PAGE UNDER CONSTRUCTION]
    <br />
    Contact Page
  </h1>

</div>