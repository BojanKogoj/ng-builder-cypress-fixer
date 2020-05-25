/**
 * This is custom webpack configuration, which allows you to hook into Angular build process.
 * 
 * `@angular-builders/custom-webpack` package is required for this to work
 */

const path = require('path');
const AngularCompilerPlugin = require('@ngtools/webpack');

module.exports = (config) => {
  config.plugins = [
    new AngularCompilerPlugin.AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      directTemplateLoading: false
    })
  ]

  config.module.rules.push(
    {
      test: /\.html$/,
      use: [
        { loader: 'raw-loader' },
        {
          loader: path.resolve('data-cy-remover.js'),
        }
      ]
    },
  );
};
