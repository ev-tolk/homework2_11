const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const CopyPlugin = require(`copy-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`, 
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `build`)
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`), 
    publicPath: `http://localhost:8080/`,
    hot: true, 
    compress: true 
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: `babel-loader` //чтобы файлы джс перевести из ес6 в ес5
    }]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: `./public/index.html` //указать файл входа, куда подключаемся
    }),
    new CopyPlugin([
      {from: `./public/css`, to: `css`},  //собрать все файлы css
      {from: `./public/img`, to: `img`}
    ])
  ]
};
