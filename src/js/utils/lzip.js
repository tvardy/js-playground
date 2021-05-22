import lzw from 'lzwcompress'

export const compress = {
  bits: 32,
  sep: ':'
}

export const pack = (obj) => {
  return lzw
    .pack(JSON.stringify(obj))
    .map((n) => n.toString(compress.bits))
    .join(compress.sep)
}

export const unpack = (str) => {
  return JSON.parse(
    lzw.unpack(str.split(compress.sep).map((s) => parseInt(s, compress.bits)))
  )
}
