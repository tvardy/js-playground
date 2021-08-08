/* global importScripts, lzwCompress, webCompressor */
import SideWorker from '@78nine/sideworker'

const worker = new SideWorker({
  debug: true,
  init: () => {
    importScripts('https://unpkg.com/lzwcompress@1.1.0/lzwCompress.js')
    importScripts('https://unpkg.com/web-compressor@0.5.1/new.js')

    const WebCompressor = webCompressor

    self.compress = async (type, data) => {
      const res = await self[type](data)
      return res.toString()
    }

    self.b64deflate = new WebCompressor().compress
    self.b64gzip = new WebCompressor('gzip').compress

    self.utf16deflate = new WebCompressor('deflate', 'utf-16').compress
    self.utf16gzip = new WebCompressor('gzip', 'utf-16').compress

    const pack = (data) => lzwCompress.pack(JSON.stringify(data))
    const compress = { bits: 32, sep: ':' }

    self.lzwDec = (data) => pack(data).join(compress.sep)
    self.lzw32 = (data) =>
      pack(data)
        .map((n) => n.toString(compress.bits))
        .join(compress.sep)
  }
})

worker.define('b64deflate', (data) => self.compress('b64deflate', data))
worker.define('b64gzip', (data) => self.compress('b64gzip', data))

worker.define('utf16deflate', (data) => self.compress('utf16deflate', data))
worker.define('utf16gzip', (data) => self.compress('utf16gzip', data))

worker.define('lzwDec', (data) => self.lzwDec(data))
worker.define('lzw32', (data) => self.lzw32(data))

export default worker
