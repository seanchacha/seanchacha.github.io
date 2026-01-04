<script lang="ts">

	import favicon from '$lib/assets/favicon.svg';
	import linkedin from '$lib/assets/linkedin.svg';

  	import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';

	const isMobile = new IsMobile();
</script>

<div class="flex items-center px-4 py-2 bg-secondary text-secondary-foreground min-h-[10rem] pt-8">

    <div class="flex flex-row items-center {isMobile.current ? '' : 'pl-10'}">
        <a href="/" class="favicon-container pl-2 pr-4 group" aria-label="Home">
            <img src={favicon} alt="Home — sean cha" class="h-8 w-8 object-contain favicon-wiggle" />
        </a>
        <div class="flex flex-col px-4">
            <a class="pb-0.5 hover:underline" href="/" aria-label="Home">
                Home
            </a>
            <a class="py-0.5 hover:underline" href="/blogs" aria-label="Blogs">
                Blogs
            </a>
            <a class="pt-0.5 hover:underline" href="/#contact-resume" aria-label="Contact">
                Contact
            </a>
        </div>
    </div>

	<div class="ml-auto {isMobile.current ? '' : 'pr-15'}">
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