/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const srcPath = (subdir) => path.join(__dirname, 'src', subdir);

module.exports = {
  entry: './src/index',
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        include: srcPath(''),
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.png'],
    alias: {
      '@assets': srcPath('assets'),
      '@common': srcPath('common'),
      '@components': srcPath('components'),
      '@constants': srcPath('constants'),
      '@queries': srcPath('queries'),
      '@services': srcPath('services'),
      '@stores': srcPath('stores'),
      '@types': srcPath('types'),
      '@utils': srcPath('utils'),
    },
    fallback: {
      path: false,
      fs: false,
      os: false,
    },
  },
};
