const readline = require('readline')
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function confirm(question, opts, cb) {
  const _opts = opts.map(o => o.option).join('/')
  const _question = `${question} (${_opts}) `

  reader.question(_question, _answer => {
    let answer = {};

    for (opt of opts) {
      const option = opt.option
      const aliases = opt.aliases || []
      if (_answer === option || aliases.includes(_answer)) answer[option] = true
    }

    cb(answer)

    reader.close()
  })
}

module.exports = confirm
