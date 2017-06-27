/* @flow */
import test from 'ava'
import greeting from 'babel-preset-diff/src/greeting'

test('is the correct string', t => {
  t.is(greeting, 'Hello World!')
})
