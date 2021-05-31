import { html, define } from 'hybrids'
import { start } from './wc-script_common'

console.log('Ready', html, define)

start(document.currentScript)
