var confirm = require('.');

confirm('Do you want to delete all the files on your computer?', [
  { option: 'y', aliases: ['yes'] },
  { option: 'n', aliases: ['no'] }
], answer => {
  console.log(answer)
})
