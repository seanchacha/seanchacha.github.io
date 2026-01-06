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

## Disclaimer
This isn't a comprehensive step-by-step tutorial on how to fully replicate my site--at least not yet. Rather, this is to show and explain the tech stack with the side-benefit of showing that I didn't vibe-code *absolutely* all of it ;)

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
This website is the result of that decision.  

## Web-dev Frameworks and Tools Used

- [Svelte](https://svelte.dev/docs/svelte/overview) and [SvelteKit](https://svelte.dev/docs/kit/introduction)
- [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn-Svelte](https://www.shadcn-svelte.com/)
- [mdsvex](https://mdsvex.pngwn.io/)

## "[Wah eh](https://www.tiktok.com/@dayrose11/video/7550469363690671391)" All This?
I will only give a very brief description of each of these things since their respective docs pages
do a better job at the more detailed explanations.
### Svelte
UI Framework that lets you create "reactive" components using CSS, and a superset of HTML and JavaScript

> **Reactive** basically referring to when UI components update themselves automatically when any of their
dependent data gets updated

What do I mean by 'superset of HTML and Javascript'? Well, the HTML and JS that you write in a Svelte project has
additional Svelte-specific features that is made possible by the fact that Svelte is a compiler.

The code that you write gets compiled into vanilla/plain JS by the Svelte compiler to be directly run in the browser. Therefore, while something like React uses a Virtual DOM engine in order to enable fast reactivity, Svelte embeds this reactivity into the Javascript that it compiles so that it doesn't have to bundle reactivity libraries with your code in order for it to work on the browser.

It also means that Svelte can basically add any arbitrary syntax rules (whether for good or bad) to its code.

For example, you can have logic blocks in your HTML directly:

```html
{#if condition}
{:else if other}
{:else}
{/if}
```

...and two-way reactivity:
```svelte
<script>
  let name = $state('');
</script>

<input bind:value={name}>
```
...and a lot more other things that you can read about [here](https://svelte.dev/docs/svelte/overview)

### SvelteKit
Svelte is only in charge of rendering UI compopnents.
Svelte*Kit* has all the extra tools you need on top of Svelte to build a full app.

In the case of this website, this includes:
- Project management and dev tools (SvelteKit wraps around [Vite](https://vite.dev/))
- [Routing](https://svelte.dev/docs/kit/routing)
- Client, Server Side, and Static Rendering configuration (see [here](https://svelte.dev/docs/kit/project-types))

Read more about it [here](https://svelte.dev/docs/kit/introduction).

### Github Pages

[Github's own page](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) explains it best:
> **GitHub Pages** is a **static site hosting service** that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website.

In SvelteKit, this corresponds to using their static rendering adapter, [adapter-static](https://svelte.dev/docs/kit/project-types#Static-site-generation).

Github Pages hosting is free, but it supports static pages only, meaning that the server needs to be able to render your page at build-time before it reaches your user, with optionally having the client (**not** the server) finish the rendering and [hydration](https://en.wikipedia.org/wiki/Hydration_(web_development)) upon client request using the javascript that the server sends

> **NOTE**: This is not to be confused with server-side rendering, which can newly render UI as the client requests it. This is **pre**-rendering, where the UI is already rendered BEFORE the client requests it.

In basic terms, this means custom server functions are not allowed, e.g. Node.js/Python/Ruby/PHP server, database queries, API routes that run on the server, and server-side rendering.

To use Github Pages, you must [enable it in the repo settings](https://docs.github.com/en/pages/quickstart)

By default, each Github user and organization page is allocated:

`http(s)://<owner>.github.io`  

And for each repo:

`http(s)://<owner>.github.io/<repositoryname>`

If you want to use a custom domain name like I did, buy a domain from a provider ([Cloudfare](https://www.cloudflare.com/learning/dns/how-to-buy-a-domain-name/), [Namecheap](https://www.namecheap.com/domains/domain-name-search/), [Squarespace](https://domains.squarespace.com/), etc) and then [configure it on Github](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

### Tailwind CSS
Tailwind CSS is a popular CSS toolkit that comes with many combinable built-in utility classes that removes the need for a lot of CSS that you'd need to otherwise write yourself.

It is also what is used by Shadcn (see next section)

### Shadcn-Svelte
[Shadcn](https://ui.shadcn.com/) is a web UI component library (they say it's not a component library, and rather--I guess--a component *code* library but whatever) that is open-source, open-code.

[Shadcn-*Svelte*](https://www.shadcn-svelte.com/) is an official-ish port of Shadcn specifically made for Svelte.

### mdsvex
From [Svelte themselves](https://svelte.dev/docs/cli/mdsvex):
> mdsvex is a markdown preprocessor for Svelte components - basically MDX for Svelte. It allows you to use Svelte components in your markdown, or markdown in your Svelte components.

See mdsvex's [site](https://mdsvex.pngwn.io/)

## Building the Site

You can create a Svelte project using SvelteKit or Vite by itself. I chose SvelteKit:

`npx sv create <project-name>`



## Hosting the Site