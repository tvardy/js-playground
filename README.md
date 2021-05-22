# See all in action

https://tvardy.github.io/js-playground

# What is being done here?

## Lightweight state management

I tried to figure out how to write a simple Redux-like central app management either dependency-free ([Svelte stores](https://svelte.dev/tutorial/custom-stores)) or with some small (in size not features) libraries. In terms of libraries, I eventually picked up on:

- [Stent](https://github.com/krasimir/stent) - "is combining the ideas of [Redux](http://redux.js.org/) with the concept of [state machines](https://en.wikipedia.org/wiki/Automata_theory)."
- [Preach](https://github.com/zeusdeux/preach) - "a lightweight **pubsub** utility for node and the browser."

The views show the same simple TO-DO List application written with [Svelte](https://github.com/sveltejs/svelte) and [µce-template](https://github.com/WebReflection/uce-template). The apps are split into 3 simple components: **header** (with a new task input), **tasks list**, **footer**. Each of the components is independently connected to the store and gets updated whenever the app's state changes.

As both applications are connected to the same store, the changes made on one side are immediately reflected on the other.

Another possible step here would be using the components as **micro-frontends** (e.g. take header from Svelte version, tasks list written with uce-template, and the footer written with another technology)

## AppRun + Pocket.io

[AppRun](https://github.com/yysun/apprun) "is a JavaScript library for building reliable, high-performance web applications using the Elm-inspired architecture, events, and components."

[Pocket.io](https://github.com/WebReflection/pocket.io) is "a minimalistic version of [socket.io](https://socket.io/) that weights about 1K instead of 60K."

The demo page consists of three elements:
1. a simple [Message Broker](/src/node-ws-message-brocker/index.js) server
2. a [Data Emmiter](https://tvardy.github.io/js-playground/pages/apprun_ws_emitter.html) page which just picks a random number (whithin a random delay) and sends it over an open web-socket connection to the Message Broker
3. a [Client](https://tvardy.github.io/js-playground/pages/apprun_ws_client.html) page connected to the same Message Broker and just reading the data and showing it with additional information if the new number is higher or lower than the previous one.

It's a good example of showing stock or bookmaker price changes in real-time with lightweight JS tools.

## LZ Chat

Few different things being played with at the same time

### Firstly

Another approach to the Lightweight State Management. This time [AppRun](https://www.npmjs.com/package/apprun) + [µhtml](https://www.npmjs.com/package/uhtml) vs. [HyperSimple](https://www.npmjs.com/package/hypersimple)

### Secondly

A simple chat application using the same Message Broker and pocket.io client library

### Thirdly

The messages in the chat are not being sent in plain text. Instead we're using [lzwCompress](https://www.npmjs.com/package/lzwcompress) and a small additional data "mangling" operation (more on that in the next chapter)

<!--stackedit_data:
eyJoaXN0b3J5IjpbNjkyODgwMzk5XX0=
-->