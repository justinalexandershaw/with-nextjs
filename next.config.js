const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  webpack: (config) => {
    config = {
      plugins: [
        new CopyPlugin({
          patterns: [
            {
              from: 'node_modules/@aztec/sdk/*.(wasm|worker.js)',
              to: '[name].[ext]',
            },
          ],
        }
      ),
    ], ...config};
    return config
  },
}