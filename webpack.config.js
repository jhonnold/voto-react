const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "/public"),
    publicPath: "/",
    filename: "main.bundle.js",
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
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
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
      "/api": {
        target: "https://voto.io",
        secure: false,
      },
    },
    historyApiFallback: true,
    contentBase: "./",
    disableHostCheck: true,
    host: "0.0.0.0",
    port: 3000,
  },
  devtool: "source-map",
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
