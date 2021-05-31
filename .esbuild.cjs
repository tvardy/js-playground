const { list } = require('./.browserslist.cjs')
const esbuild = require('esbuild')
const sveltePlugin = require('esbuild-svelte')
const pack = require('./package.json')

const env = process.argv[2] || 'dev'

const options = {
  _: {
    bundle: true,
    sourcemap: true,
    plugins: [sveltePlugin()],
    target: list,
    jsxFactory: 'app.h',
    jsxFragment: 'app.Fragment',
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
  .build(
    Object.assign(
      {
        entryPoints: pack.esbuild.modules,
        format: 'esm',
        splitting: true,
      },
      options._,
      options[env]
    )
  )
  .catch(() => process.exit(1))

esbuild
  .build(
    Object.assign(
      {
        entryPoints: pack.esbuild.bundles,
        format: 'iife',
      },
      options._,
      options[env]
    )
  )
  .catch(() => process.exit(1))
