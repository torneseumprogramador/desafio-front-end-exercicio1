const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '../../scripts.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
  // mode: 'development'
};
