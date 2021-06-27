import { html, define } from 'hybrids'
import { start } from './wc-script_common'

function handleClick (host) {
  host.count += 1
  host.active = !host.active
}

define('simple-component-hybrids', {
  count: 0,
  active: false,
  children: (host) => Array.from(host.childNodes),
  render: ({ active, title, count, children }) => html`
    <div class="${{ active }}" onclick="${handleClick}">
      <h1>${title}</h1>
      <pre>Clicked: ${count} times</pre>
      ${children}
    </div>
  `.style`
    div {
      display: block;
      padding: 2em;
      background: lightcyan;
      color: var(--shade2);
      text-align: center;
      cursor: pointer;
    }
    div.active {
      background: var(--shade1);
      color: var(--shade0);
    }
    div.active > * {
      color: inherit;
    }
    h1 {
      color: var(--shade1);
    }
  `
})

start(document.currentScript)
