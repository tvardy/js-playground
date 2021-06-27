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
  status: 'connected'
}

describe('LZ Chat', () => {
  before(() => {
    cy.visit('/pages/lz-chat.html')
  })

  it('should display 2 applications side by side', () => {
    cy
      .get(pageModel.app)
      .should('have.length', expected.count)
  })

  describe('Entering a user name', () => {
    it('should connect to the chat view', () => {
      cy
        .get(pageModel.app)
        .each((app, i) => {
          cy
            .wrap(app)
            .find(pageModel.input.user)
            .type(`${testData.users[i]}{enter}`)

          cy
            .wrap(app)
            .find(pageModel.status.selector)
            .invoke('attr', pageModel.status.attr)
            .should('equal', expected.status)
        })
    })
  })

  describe('Entering text into message input', () => {
    before(() => {
      cy
        .get(pageModel.app)
        .each((app, i) => {
          cy
            .wrap(app)
            .find(pageModel.input.msg)
            .type(`${testData.messages[i]}{enter}`)
        })
    })

    it('should display all messages in their order and place', () => {
      cy
        .get(pageModel.app)
        .each((app, i) => {
          cy
            .wrap(app)
            .find(pageModel.chatBox)
            .find(pageModel.message.selector)
            .should('have.length', expected.count)
            .invoke('eq', i)
            .then(msg => {
              msg = msg[0]

              expect(msg.getAttribute(pageModel.message.attr.self)).to.exist
              expect(msg.getAttribute(pageModel.message.attr.user)).to.equal(testData.users[i])
            })
        })
    })
  })
})
