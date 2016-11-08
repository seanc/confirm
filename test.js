const test = require('tape')
const confirm = require('.')

test('test option', t => {
  t.plan(1)

  confirm('do you like this module?', [
    { option: 'y' },
    { option: 'n' }
  ], answer => {
    t.equal(answer.y, true)
  })

  process.stdout.write('y')

})
