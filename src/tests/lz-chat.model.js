export const pageModel = {
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

export const testData = {
  users: ['First', 'Second'],
  messages: ['First message', 'Second message']
}

export const expected = {
  count: 2,
  statuses: /connect(ed|ing)/
}
