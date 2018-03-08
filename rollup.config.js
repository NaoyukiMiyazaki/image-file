let typescript = require('rollup-plugin-typescript2');
let uglify = require('rollup-plugin-uglify');

let filename = 'image-file';
let moduleName = 'ImageFile';

let dest, plugins;
if (process.env.TASK === 'build') {
  dest = `dist/${filename}.min.js`;
  plugins = [ typescript(), uglify() ];
} else {
  dest = `dist/${filename}.js`;
  plugins = [ typescript() ];
}

export default {
  input: 'src/index.ts',
  output: {
    file: dest,
    format: 'umd',
    name: moduleName
  },
  plugins
}