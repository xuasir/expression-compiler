const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, './', p)

export default {
  input: resolvePath('src/index.js'),
  outupt: [
    {
      file: 'fruitscript.js',
      format: 'umd',
      name: 'fruitscript'
    },
    {
      file: 'fruitscript.cjs.js',
      format: 'cjs'
    },
    {
      file: 'fruitscript.es.js',
      format: 'esm'
    }
  ],
  plugins: [resolve(), commonjs()]
}
