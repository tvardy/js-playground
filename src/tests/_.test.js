import { URL } from './_config'
import { Selector } from 'testcafe'

fixture`_`.page`${URL}`

test('check main title', async (t) => {
  const title = Selector('html head title')

  await t.expect(title.textContent).eql('JS Playground')
})
