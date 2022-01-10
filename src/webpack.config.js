// SINTAXA "ES5":

// IMP. "PLUGIN":
const HtmlWebPackPlugin = require('html-webpack-plugin');




// EXP. OBIECTUL DE CONFIGURARE "WEBPACK":
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html'
    })
  ]
};
