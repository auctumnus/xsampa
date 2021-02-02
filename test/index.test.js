const test = require('ava')
const xsampa = require('../dist/xsampa.js')

test('basic text', t => {
  t.is(xsampa.ipa('DIs Iz @ fErli: beI_^sIk tEst'), 'ðɪs ɪz ə fɛrliː beɪ̯sɪk tɛst')
})
