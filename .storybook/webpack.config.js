const path = require("path");
const rootPath = path.resolve(__dirname, '../');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      }
    ]
  },
  resolve: {
    extensions: ['.vue'],
    alias: {
      '~': rootPath,
      '@': rootPath,
    }
  }
};