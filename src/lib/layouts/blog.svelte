<script lang="ts">
  interface Props {
    title: string;
    date: string;
    author?: string;
    description?: string;
    children?: import('svelte').Snippet;  // Add this
  }

  let { title, date, author, description, children }: Props = $props();

  import { IsMobile } from '$lib/hooks/is-mobile.svelte.ts';
  import { onMount } from 'svelte';

  const isMobile = new IsMobile();
  onMount(() => {
    const proseLinks = document.querySelectorAll('.prose a');
    proseLinks.forEach((link) => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  });
</script>

<article class="max-w-4xl mx-auto px-4 {isMobile.current ? '' : 'pt-6'} mt-8">
  <div class="pb-4">
    <a href="/blogs" class="hover:underline">
      &lt; Go back to all posts
    </a>
  </div>
  <header class="mb-8">
    <h1 class="text-4xl font-bold mb-2">{title}</h1>
    <p class="text-gray-600">
      <time>{date}</time>
      {#if author}
        <span class="ml-4">by {author}</span>
      {/if}
    </p>
    {#if description}
      <p class="pt-4 pb-10">{description}</p>
    {/if}
  </header>

  <div class="prose prose-lg max-w-none">
    {@render children?.()}
  </div>
</article>


<style>
  .blog-post {
    max-width: 65ch;
    margin: 0 auto;
    padding: 2rem;
  }

  header {
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .meta {
    color: #666;
    font-size: 0.9rem;
    display: flex;
    gap: 1rem;
  }

  /* Style all content in the slot */
  .prose :global(h2) {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .prose :global(h3) {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }

  .prose :global(h4) {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .prose :global(p) {
    margin-bottom: 1.25rem;
    line-height: 1.7;
    font-size: 1.1rem;
  }

  .prose :global(a) {
    color: #0066cc;
    text-decoration: underline;
  }

  .prose :global(a:hover) {
    color: #0052a3;
  }

  .prose :global(ul),
  .prose :global(ol) {
    list-style-type: disc; /* Add this */
    margin-bottom: 1.25rem;
    padding-left: 2rem;
  }

  .prose :global(ol) {
    list-style-type: decimal; /* Add this for ordered lists */
  }

  .prose :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }

  .prose :global(blockquote) {
    border-left: 4px solid var(--border);  /* Use theme border */
    padding-left: 1.5rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: var(--muted-foreground);  /* Use theme muted color */
    background: var(--muted);  /* Optional: add subtle background */
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
  }

  .prose :global(code) {
    background: var(--muted);  /* Use your theme color */
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.9em;
    font-family: 'Courier New', monospace;
    color: inherit;
    word-wrap: break-word;
    word-break: break-all;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }

  .prose :global(pre) {
    background: #1e1e1e;
    color: #d4d4d4;
    padding: 1.5rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  .prose :global(pre code) {
    background: transparent;
    padding: 0;
    color: inherit;
  }

  .prose :global(hr) {
    border: none;
    border-top: 2px solid #e5e5e5;
    margin: 3rem 0;
  }

  .prose :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }

  .prose :global(th),
  .prose :global(td) {
    border: 1px solid #e5e5e5;
    padding: 0.75rem;
    text-align: left;
  }

  .prose :global(th) {
    background: #f9f9f9;
    font-weight: 600;
  }
</style>