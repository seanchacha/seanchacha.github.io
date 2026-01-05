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

But I didn't know anything about frontend and web design, so my best solution was to use a [Squarespace](https://www.squarespace.com) website.

The problem is that this was $25/month for building the website drag-and-drop style and hosting it.  
Easy but more than I was willing to pay.

So I bit the bullet and learned the **minimum** amount of HTML and CSS that I needed to make a basic portfolio website that I could host using [Github Pages](https://docs.github.com/en/pages).  
But it looked a little too basic and I had trouble making everything mobile-friendly.

So theeeen I looked to javascript/web-dev frameworks like React, Vue, Angular, Svelte...etc, and I tried React and Svelte tutorials and decided that Svelte seemed a *bit* more intuitive to me.
This website is the result of my decision  

## Web-dev Frameworks and Tools Used

- [Svelte](https://svelte.dev/docs/svelte/overview) and [SvelteKit](https://svelte.dev/docs/kit/introduction)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn-svelte](https://www.shadcn-svelte.com/)
- [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

## "Wah eh" All This? ([see](https://www.tiktok.com/@dayrose11/video/7550469363690671391))
I will only give a very brief description of each of these things since their respective docs pages
do a better job at the more detailed explanations.
### Svelte
UI Framework that lets you create "reactive" components using CSS, and a superset of HTML and CSS

> **reactive** basically referring to when UI components update themselves automatically when any of their
dependent data gets updated

