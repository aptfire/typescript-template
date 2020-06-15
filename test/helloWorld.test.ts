import * as test from 'tape'
import { sayHello, sayHelloAsync } from '../src/helloWorld'

/*
describe('helloWorld', () => {
  it('says hello', () => sayHello().should.eq('Hi!'))

  it('says hello asynchronously', async () => sayHelloAsync().should.eventually.eq('Hi!'))
})
*/

test('helloWorld', t => {
  t.equal(sayHello(), 'Hi!')
  t.end()
})
