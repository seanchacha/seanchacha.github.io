---
layout: blog
title: Build + Hosting this Site for Free
author: Sean Cha
description: How I built and hosted this site for free using Svelte 5 + SvelteKit + Github Pages
date: 'created: 2026-01-01 | last updated: 2026-01-05'
categories:
  - sveltekit
  - svelte
published: true
---

<script>
  import svelteMachine from '$lib/assets/blogs/this-site/svelteMachine.png';
</script>

![svelte machine cover photo]({svelteMachine})

## Motivation

As an engineer who is yet another cog in the machine at the mercy of employeers and recruiters,
I wanted to make a website that served as my personal portfolio--something more visual and engaging than my resume pdf.

But I didn't know anything about frontend and web design (still don't, really), so my best solution was to use a [Squarespace](https://www.squarespace.com) website.

The problem is that this was $25/month for building the website drag-and-drop style and hosting it.  
Easy but more than I was willing to pay.

So I bit the bullet and learned the **minimum** amount of HTML and CSS that I needed to make a basic portfolio website that I could host using [Github Pages](https://docs.github.com/en/pages).  
But it looked a little too basic and I had trouble making everything mobile-friendly, which I know is more of a skill issue than a framework issue, but still,
I wanted something better.

So theeeen I looked to javascript/web-dev frameworks like React, Vue, Angular, Svelte...etc, and I tried React and Svelte tutorials and decided that Svelte seemed a *bit* more intuitive to me.
This website is the result of my decision  

## Web-dev Frameworks and Tools Used

- [Svelte](https://svelte.dev/docs/svelte/overview) and [SvelteKit](https://svelte.dev/docs/kit/introduction)
- [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn-Svelte](https://www.shadcn-svelte.com/)

## "[Wah eh](https://www.tiktok.com/@dayrose11/video/7550469363690671391)" All This?
I will only give a very brief description of each of these things since their respective docs pages
do a better job at the more detailed explanations.
### Svelte
UI Framework that lets you create "reactive" components using CSS, and a superset of HTML and JavaScript

> **reactive** basically referring to when UI components update themselves automatically when any of their
dependent data gets updated

What do I mean by 'superset of HTML and Javascript'? Well, the HTML and JS that you write in a Svelte project has
additional Svelte-specific features that is made possible by the fact that Svelte is a compiler.

The code that you write gets compiled into vanilla/plain JS by the Svelte compiler to be directly run in the browser. Therefore, while something like React uses a Virtual DOM engine in order to enable fast reactivity, Svelte embeds this reactivity into the Javascript that it compiles so that it doesn't have to bundle libraries with your code in order for it to work on the browser.

It also means that Svelte can add basically any arbitrary syntax rules (whether for good or bad) to its code.

For example, logic blocks in your HTML directly:

```html
{#if condition}
{:else if other}
{:else}
{/if}
```

...two-way reactivity:
```svelte
<script>
  let name = $state('');
</script>

<input bind:value={name}>
```
..and a lot more other things that you can read [here](https://svelte.dev/docs/svelte/overview)

### SvelteKit
Svelte only is in charge of rendering UI compopnents.
SvelteKit is all the extra tools you need on top of Svelte to build a full app.

In the case of this website, this includes:
- Project management and dev tools (SvelteKit wraps around [Vite](https://vite.dev/))
- [Routing](https://svelte.dev/docs/kit/routing)
- Client vs Server Side Rendering configuration (see [here](https://svelte.dev/docs/kit/project-types))

Read more about it [here](https://svelte.dev/docs/kit/introduction).

### Github Pages

### Tailwind CSS

### Shadcn-Svelte