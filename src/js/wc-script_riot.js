import { register, mount } from 'riot'
import { start } from './wc-script_common'
import component from './wc-script.riot'

register('simple-component-riot', component)

start(document.currentScript)

mount('simple-component-riot')
