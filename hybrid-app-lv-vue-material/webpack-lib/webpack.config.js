var webpack = require('webpack')
// module.exports = {
//   entry: './lib.js',
//   output: {
//     path: __dirname,
//     filename: './bundle_lib.js'
//   },

//   module: {
//     loaders: [
//       { test: /\.css$/, loader: 'style-loader!css-loader' },
//       { test: /\.(woff|woff2|eot|ttf|svg)(\?[a-z0-9]+)?$/, loader: 'url-loader?limit=1000&name=fonts/[name].[hash:6].[ext]' }
//     ]
//   }

// }
module.exports = {
  entry: './lib.js',
  output: {
    path: __dirname,
    filename: './bundle_lib.js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(woff|woff2|eot|ttf|svg)(\?[a-z0-9]+)?$/, loader: 'url-loader' }
    ]
  }

}
