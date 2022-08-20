const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

https: module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map", //stackoverflow.com/questions/30870830/how-do-i-generate-sourcemaps-when-using-babel-and-webpack
  devServer: {
    hot: true, // enabled hot module replacement
    // open: true,  // open browser on start
  },
  plugins: [
    new ReactRefreshWebpackPlugin(), // enable reload on certain component change instead of whole file
    new webpack.DefinePlugin({
      "process.env.name": "react-ts-webpack-starter",
    }),
  ],
};
