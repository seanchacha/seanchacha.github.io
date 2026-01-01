<script lang="ts">
  import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';
	import { typewriter, messages } from '$lib/components/home_msgs.ts';

  const isMobile = new IsMobile();
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
  style="max-width: {isMobile.current ? '97%' : '75%'};"
>
  <h1 class="text-2xl font-normal tracking-tight text-left">
    [PAGE UNDER CONSTRUCTION]
    <br />
    Hi, I'm Sean
  </h1>
  <div class="min-h-[1.5em]">
    {#key i}
      <p in:typewriter={{ speed: 5 }}>
        {messages[i] || ''}
      </p>
    {/key}
  </div>
</div>

<div
  class="flex flex-col items-start justify-center min-h-screen px-5 py-120 mx-auto"
  style="max-width: {isMobile.current ? '97%' : '75%'};"
>
  <h3 class="scroll-m-20 text-2xl tracking-tight text-left">I SAID IM WORKING ON IT!</h3>
</div>