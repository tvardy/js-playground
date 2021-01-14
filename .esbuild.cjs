const { list } = require('./.browserslist.cjs')
const esbuild = require('esbuild')
const sveltePlugin = require('esbuild-svelte')
const pack = require('./package.json')

const env = process.argv[2] || 'dev'

const options = {
  _: {
    entryPoints: pack.esbuild.entries,
    bundle: true,
    sourcemap: true,
    format: 'esm',
    splitting: true,
    plugins: [sveltePlugin()],
    target: list,
    outdir: pack.esbuild.outdir,
  },
  dev: {
    define: {
      'process.env.NODE_ENV': "'development'",
    },
  },
  prod: {
    define: {
      'process.env.NODE_ENV': "'production'",
    },
    minify: true,
  },
}

esbuild
  .build(Object.assign({}, options._, options[env]))
  .catch(() => process.exit(1))
