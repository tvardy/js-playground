export const start = (element = document.body, position = 'beforeend') => {
  const where = document.querySelector(element.dataset.target)
  const what = element.text.trim().replace(/\n\s+/gm, '')

  where.insertAdjacentHTML(position, what)
}
