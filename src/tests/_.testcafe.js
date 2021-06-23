import { URL } from './_config'
import { ClientFunction } from 'testcafe'

fixture`_`.page`${URL}`

const getPageTitle = ClientFunction(() => document.title)

test('check main title', async (t) => {
  const title = await getPageTitle()

  await t.expect(title).eql('JS Playground')
})
