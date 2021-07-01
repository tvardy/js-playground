import compile from 'mikado/dist/module/compile'

const brick = compile(`
  <span>
    <style>
    :scope brick {
      display: block;
      padding: .5em;
      border: 1px solid var(--shade1);
    }
    :scope brick.eql {
      background-color: #005;
    }
    :scope brick.up {
      background-color: #050;
    }
    :scope brick.down {
      background-color: #500;
    }
    </style>
    <brick class="{{ data.dir }}">
      {{ data.value }}
    </brick>
  </span>
`)

brick.n = 'brick'

export default brick
