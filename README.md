# See all in action

https://tvardy.github.io/js-playground

# What is being done here?

## Lightweight state management

I tried to figure out how to write a simple Redux-like central app management either dependency-free ([Svelte stores](https://svelte.dev/tutorial/custom-stores)) or with some small (in size not features) libraries. In terms of libraries, I eventually picked up on:

- [Stent](https://github.com/krasimir/stent) - a **Fixed State Machine** approach to Redux-like state management
- [Preach](https://github.com/zeusdeux/preach) - a lightweight **pubsub** utility for node and the browser.

The views show the same simple TO-DO List application written with [Svelte](https://github.com/sveltejs/svelte) and [µce-template](https://github.com/WebReflection/uce-template). The apps are split into 3 simple components: **header** (with a new task input), **tasks list**, **footer**. Each of the components is independently connected to the store and gets updated whenever the app's state changes.

As both applications are connected to the same store, the changes made on one side are immediately reflected on the other.

Another possible step here would be using the components as **micro-frontends** (e.g. take header from Svelte version, tasks list written with uce-template, and the footer written with another technology)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5MjE1MjQ5OTddfQ==
-->