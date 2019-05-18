const path = require("path");
const rootPath = path.resolve(__dirname, '../');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
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