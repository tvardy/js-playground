# See it all in action

https://tvardy.github.io/js-playground


# What is being done here?

<details>
  <summary>
    Lightweight state management
  </summary>

## Lightweight state management

I tried to figure out how to write a simple Redux-like central app management either dependency-free ([Svelte stores](https://svelte.dev/tutorial/custom-stores))
or with some small (in size, not features) libraries. In terms of libraries, I eventually picked up on:

- [Stent](https://github.com/krasimir/stent) - "is combining the ideas of [Redux](http://redux.js.org/) with the concept of [state machines](https://en.wikipedia.org/wiki/Automata_theory)."
- [Preach](https://github.com/zeusdeux/preach) - "a lightweight **pubsub** utility for node and the browser."

The views show the same simple TO-DO List application written with [Svelte](https://github.com/sveltejs/svelte) and [µce-template](https://github.com/WebReflection/uce-template).
The apps are split into 3 simple components: **header** (with a new task input), **tasks list**, **footer**.
Each of the components is independently connected to the store and gets updated whenever the app's state changes.

As both applications are connected to the same store, the changes made on one side are immediately reflected on the other.

Another possible step here would be using the components as **micro-frontends** (e.g. take the header from Svelte version,
tasks list written with uce-template, and the footer written with another technology)
</details>

---

<details>
  <summary>
    AppRun + `Pocket.io`
  </summary>

## AppRun + `Pocket.io`

[AppRun](https://github.com/yysun/apprun) "is a JavaScript library for building reliable, high-performance web applications
using the Elm-inspired architecture, events, and components."

[Pocket.io](https://github.com/WebReflection/pocket.io) is "a minimalistic version of [socket.io](https://socket.io/)
that weighs about 1K instead of 60K."

The demo page consists of three elements:
1. a simple [Message Broker](/src/node-ws-message-brocker/index.js) server
2. a [Data Emmiter](https://tvardy.github.io/js-playground/pages/apprun_ws_emitter.html) page which just picks a random number
   (within a random delay) and sends it over an open web-socket connection to the Message Broker
3. a [Client](https://tvardy.github.io/js-playground/pages/apprun_ws_client.html) page connected to the same Message Broker
   and just reading the data and showing it with additional information if the new number is higher or lower than the previous one.

It's a good example of showing stock or bookmaker price changes in real-time with lightweight JS tools.
</details>

---

<details>
  <summary>
    LZ Chat
  </summary>

## LZ Chat

Few different things being played with at the same time


### Firstly

Another approach to the Lightweight State Management. This time [AppRun](https://www.npmjs.com/package/apprun) + [µhtml](https://www.npmjs.com/package/uhtml) vs. [HyperSimple](https://www.npmjs.com/package/hypersimple)


### Secondly

A simple chat application using the same **Message Broker** and `pocket.io` for Web Socket communication.


### Thirdly

The messages in the chat are not being sent in plain text. Instead, we're using [lzwCompress](https://www.npmjs.com/package/lzwcompress)
and a small additional data "mangling" operation (more on that in the next chapter)

### Lastly

I picked this view to make some small comparison of functional testing tools: [Testcafe](https://www.testcafe.io/) vs. [Cypress](https://www.cypress.io/).
I need to admit that even though I found Testcafe's documentation and syntax much clearer and lean, the Cypress beats it with functionality,
ability to nest the tests and the mocha/chai familiar syntax.
</details>

---

<details>
  <summary>
    In-memory LZ compression efficiency test
  </summary>

## In-memory LZ compression efficiency test

After checking the [lzwCompress](https://www.npmjs.com/package/lzwcompress) package in the **LZ Chat** above,
I found out that the messages I used were so short that their LZIP-ed version was quite often bigger than the original.

So I decided to check at what level of data length can I actually benefit from the data compression
(e.g. to store more data offline in LocalStorage).

I'm using [faker](https://www.npmjs.com/package/faker) to create some realistic JSON data bundle and then trying to pack it
and compare the results. I found out that using a [little trick](/src/js/utils/lzip.js) of converting an array of decimal numbers
(produced by lzwCompress) into their 32-bit equivalents we can get even higher compression.

This test (and quite heavy fake-data creation) pushed me also into creating the [SideWorker](https://github.com/78nine/SideWorker) package.
You're encouraged to read more in its README ;)
</details>

---

<details>
  <summary>
    Web Components within script tag
  </summary>

## Web Components within script tag

Here, again, two reasons of opening a new topic to play with.

First seems to be quite obvious - just wanted to play around with Custom Elements libraries to check wich one suits me best :D

The second part... was a short discussion I recently had with my colleagues. We were seeking for an option to define a Custom Element
and immediately use it with some props and children.
We will be serving such components for other departments in our work and we really wanted them to have such a convenient way as:

```html
<script src="/path/to/my-components-script.js">
  <my-component variant="big" theme="secondary">
    <a href="#">Click here</a>
  </my-component>
</script>
```

And... it actually turned out to be pretty easy to achieve using `document.currentScript` element plus... a little [wrapper](/src/js/wc-script_common.js) ;)
</details>

---

<details>
  <summary>
    Preach State Management + Mikado
  </summary>

## Preach State Management + Mikado

Even though [Mikado](https://github.com/nextapps-de/mikado/#readme) API and documentation aren't that nice as of some newer tools,
the library keeps very good positions in [JS Framework Benchmark](https://krausest.github.io/js-framework-benchmark/2021/table_chrome_90.0.4430.72.html) Test.
I've written a simple application displaying up to 10 randomly generated numbers (in random delay).
I will try to compare its results with [µhtml](https://www.npmjs.com/package/uhtml)

_[to be continued]_
</details>

---

## Planned

- [ ] Finally writing a blog post "What I learned by migrating my blog from Jekyll to Sapper" :D
