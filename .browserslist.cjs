const browserslist = require('browserslist')

function getBuildTargets() {
  const SUPPORTED_BUILD_TARGETS = [
    'es',
    'chrome',
    'edge',
    'firefox',
    'ios',
    'node',
    'safari',
  ]

  const sep = ' '
  const supported = (b) =>
    SUPPORTED_BUILD_TARGETS.some((t) => b.startsWith(t + sep))
      ? b.replace(sep, '')
      : undefined

  return browserslist().map(supported).filter(Boolean)
}

module.exports = {
  list: getBuildTargets()
}
