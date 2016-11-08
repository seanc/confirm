# confirm

> Simple CLI confirmation

## Installation

```sh
$ npm install --save seanc/confirm
```

## Usage

```js
var confirm = require('confirm');

confirm('Do you want to delete all the files on your computer?', [
  { option: 'y', aliases: ['yes'] },
  { option: 'n', aliases: ['no'] }
], answer => {
  if (answer.y) console.log('rip all files on your computer')
})
```

## License

MIT © [Sean Wilson](https://imsean.me)
