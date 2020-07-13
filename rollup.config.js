const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, './', p)

export default {
  input: resolvePath('src/index.js'),
  outupt: [
    {
      name: 'fruitscript.js',
      format: 'umd'
    }
  ]
}
