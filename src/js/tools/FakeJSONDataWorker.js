/* global importScripts, faker */
import SideWorker from '@78nine/sideworker'

const worker = new SideWorker({
  debug: true,
  init: () => {
    importScripts('https://unpkg.com/faker@5.5.3/dist/faker.min.js')

    const { fake, datatype } = faker

    function Record () {
      return {
        id: datatype.uuid(),
        firstName: fake('{{name.firstName}}'),
        lastName: fake('{{name.lastName}}'),
        avatarUrl: fake('{{image.avatar}}'),
        email: fake('{{internet.email}}'),
        phone: fake('{{phone.phoneNumberFormat}}'),
        isPremium: datatype.boolean(),
        list: Array.from(
          { length: datatype.number({ min: 10, max: 15 }) },
          ChildRecord
        )
      }
    }

    function ChildRecord () {
      return {
        id: datatype.uuid(),
        title: fake('{{commerce.productName}}'),
        amount: datatype.number({ min: 10, max: 20 }),
        created: new Date(fake('{{date.past}}')).toISOString()
      }
    }

    self.generate = (length) => Array.from({ length }, Record)
  }
})

worker.define('generate', (num) => self.generate(num))

export default worker
