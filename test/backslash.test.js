const test = require('ava')
const xsampa = require('../dist/xsampa.js')

test('correctly handles backslash', t => {
  t.is(xsampa.ipa('r\\'), 'ɹ')
})

