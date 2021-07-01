import Mikado from 'mikado/dist/module/mikado'
import compile from 'mikado/dist/module/compile'

import brick from './mikado.brick'
Mikado.register(brick)

export default compile(`
  <client>
    <style>
    :scope spacer {
      display: block;
      margin: 0 0 2em;
    }
    :scope bricks {
      display: flex;
      justify-content: space-evenly;
    }
    :scope bricks > * {
      width: 3em;
      text-align: center;
    }
    </style>
    <h1>Mikado App Works!</h1>
    <spacer>
      <button click="toggle">{{ data.seeding ? 'Pause' : 'Play' }}</button>
    </spacer>
    <bricks include="brick" for="data.values"></bricks>
  </client>
`)
