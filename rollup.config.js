import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: './lib/index.js',
  output: {
    file: './public/ab-test.umd.js',
    format: 'umd',
    name: 'ABTest'
  },
  watch: {
    include: 'lib/**'
  },
  plugins: [resolve(), commonjs(), uglify()]
}