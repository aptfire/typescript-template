import { sayHello, sayHelloAsync } from '../src/helloWorld'

describe('helloWorld', () => {
  it('says hello', () => sayHello().should.eq('Hi!'))

  it('says hello asynchronously', async () => sayHelloAsync().should.eventually.eq('Hi!'))
})
