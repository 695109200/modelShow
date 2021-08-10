const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode:'development',
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: false,
    libraryTarget:'umd', //node环境与浏览器环境兼容
    umdNamedDefine: true,
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      }
    ],
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     title: 'Development',
    // }),
  ],
};
