const { list } = require('./.browserslist.cjs')
const esbuild = require('esbuild')
const sveltePlugin = require('esbuild-svelte')
const pack = require('./package.json')

const env = process.argv[2] || 'dev'

const options = {
  _: {
    entryPoints: [pack.main],
    bundle: true,
    sourcemap: true,
    plugins: [sveltePlugin()],
    target: list,
    outdir: pack.outdir,
  },
  dev: {
    define: {
      'process.env.NODE_ENV': "'development'",
    },
  },
  prod: {
    minify: true,
  },
}

esbuild
  .build(Object.assign({}, options._, options[env]))
  .then((res) => console.dir(res))
  .catch(() => process.exit(1))
