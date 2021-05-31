export const start = (element, position = 'beforeend') => {
  const where = document.querySelector(element.dataset.target)
  const what = element.text.trim().replace(/\n\s+/gm, '')

  where.insertAdjacentHTML(position, what)
}
