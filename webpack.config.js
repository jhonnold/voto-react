const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: __dirname,
    filename: "public/main.bundle.js",
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"],
        },
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "src")],
        loaders: "style-loader!css-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false",
        ],
      },
    ],
  },
  devServer: {
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  devtool: "cheap-module-source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Voto",
      hash: true,
      template: "./public/index.html",
    }),
  ],
};
