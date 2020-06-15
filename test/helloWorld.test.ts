import * as test from 'tape'
import { sayHello, sayHelloAsync } from '../src/helloWorld'

test('helloWorld', t => {
  t.equal(sayHello(), 'Hi!')
  t.end()
})

test('says hello asynchronously', async t => {
  t.equal(await sayHelloAsync(), 'Hi!')
  t.end()
})
