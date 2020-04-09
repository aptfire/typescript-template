import { expect } from 'chai'
import { sayHello } from '../src/helloWorld'

describe('helloWorld', () => {
  it('says hello', () => expect(sayHello()).to.eq('Hi!'))
})
