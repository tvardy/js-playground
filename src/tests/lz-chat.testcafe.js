import { URL } from './_config'
import { Selector } from 'testcafe'

const pageUrl = '/pages/lz-chat.html'
const pageModel = {
  app: '[data-qa="app"]',
  input: {
    user: 'input[name="user"]',
    msg: 'input[name="msg"]'
  },
  status: {
    selector: '[data-status]',
    attr: 'data-status'
  },
  chatBox: '.chat-box',
  message: {
    selector: '.message',
    attr: {
      self: 'data-self',
      user: 'data-user'
    }
  }
}
const testData = {
  users: ['First', 'Second'],
  messages: ['First message', 'Second message']
}
const expected = {
  count: 2,
  statuses: /connect(ed|ing)/
}

fixture`${pageUrl}`.page`${URL}${pageUrl}`.beforeEach(async (t) => {
  t.ctx.app = Selector(pageModel.app)
  t.ctx.count = await t.ctx.app.count
})

test('two applications side by side', async (t) => {
  const { app } = t.ctx

  await t.expect(app.count).eql(expected.count)
  await t.expect(app.child().count).eql(expected.count)
})

test('login, send and receive messages', async (t) => {
  const { app, count } = t.ctx
  // Login
  for (let i = 0; i < count; i++) {
    await t
      .typeText(app.nth(i).find(pageModel.input.user), testData.users[i])
      .pressKey('enter')
  }

  for (let i = 0; i < count; i++) {
    const textStatus = await app.nth(i).find(pageModel.status.selector)
    await t
      .expect(textStatus.getAttribute(pageModel.status.attr))
      .match(expected.statuses)
    await t.expect(app.nth(i).find(pageModel.input.msg).exists).ok()
  }

  // Send and receive messages
  for (let i = 0; i < count; i++) {
    await t
      .typeText(app.nth(i).find(pageModel.input.msg), testData.messages[i])
      .pressKey('enter')
  }

  for (let i = 0; i < count; i++) {
    const chatBox = app.nth(i).find(pageModel.chatBox)

    await t
      .expect(chatBox.find(pageModel.message.selector).count)
      .eql(testData.messages.length)

    const message = await chatBox.find(pageModel.message.selector).nth(i)

    await t.expect(message.getAttribute(pageModel.message.attr.self)).eql('true')
    await t
      .expect(message.getAttribute(pageModel.message.attr.user))
      .eql(testData.users[i])
  }
})
