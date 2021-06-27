import { define, css } from 'uce'
import { start } from './wc-script_common'

define('simple-component-uce', {
  style: (selector) => css`
    ${selector} {
      display: block;
      padding: 2em;
      background: lightpink;
      color: var(--shade2);
      text-align: center;
      cursor: pointer;
    }
    ${selector}.active {
      background: var(--shade1);
      color: var(--shade0);
    }
    ${selector}.active > * {
      color: inherit;
    }
    ${selector} h1 {
      color: var(--shade1);
    }
    ${selector} p {
      font-size: 0.8em;
      text-transform: uppercase;
    }
  `,
  render () {
    this.html`
      <h1>${this.props.title}</h1>
      <pre>Clicked: ${this.count} times</pre>
      ${Array.from(this.children)}
    `
  },
  count: 0,
  onClick (event) {
    this.classList.toggle('active')
    this.count++
    this.render()
  }
})

start(document.currentScript)
