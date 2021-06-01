export const start = (element, position = 'beforeend') => {
  const selector = element.dataset.target
  const where = selector ? document.querySelector(selector) : document.body
  const what = element.text.trim().replace(/\n\s+/gm, '')

  where.insertAdjacentHTML(position, what)
}
