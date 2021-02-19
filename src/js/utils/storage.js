/**
 * A VEEERRY siplified version to polyfill Web Storage if inaccessible
 *
 * Refer to:
 * - https://gist.github.com/jarrodirwin/0ce4c0888336b533b2c4
 * - https://gist.github.com/remy/350433
 */
const noop = () => {}

function MockedStorage () {
  return {
    length: 0,
    clear: noop,
    getItem: noop,
    key: noop,
    setItem: noop,
    removeItem: noop
  }
}

export function getStorage (self) {
  try {
    // Check for Web Storage existence.
    if (!self.localStorage || !self.sessionStorage) throw 'no storage!' // eslint-disable-line no-throw-literal

    // Test Web Storage accessibility - Needed for Safari private browsing.
    self.localStorage.setItem('storage_test', '1')
    self.localStorage.removeItem('storage_test')

    return [self.localStorage, self.sessionStorage]
  } catch (e) {
    // create simple mocked implementations
    const ls = new MockedStorage()
    const ss = new MockedStorage()

    return [ls, ss]
  }
}
