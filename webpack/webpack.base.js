const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '..', './src/index.tsx'), // entry point of the application, in our case it's the index.tsx file
  //   output: {
  //     path: path.join(__dirname, "build"),
  //     filename: "index.bundle.js",
  //   },
  mode: process.env.NODE_ENV || 'development', // development or production
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // allow us to leave off file extensions when importing, like `import Home from './Home'` instead of `import Home from './Home.tsx'`
    // modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  //   devServer: { contentBase: path.join(__dirname, "src") },
  module: {
    rules: [
      {
        test: /\.(ts|js)x$/, // ts, tsx, js and jsx are the extensions of the files we want to transpile
        exclude: /node_modules/, // exclude node_modules folder
        use: ['babel-loader'], // use babel-loader to transpile our files
      },
      {
        // test: /\.(css|scss)$/,
        test: /\.(css)$/, // css and scss are the extensions of the files we want to transpile
        use: ['style-loader', 'css-loader'],
      },

      // asset files (images, fonts, etc)
      //   {
      //     test: /\.(jpg|jpeg|png|gif|mp3|svg)$/, // image and audio files
      //     use: ["file-loader"], // this is webpack 4 approach
      //   },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    // when prod it inject the compiled bundle.js file into the index.html file with <script> tag
    // when dev it virtually inject the bundle.js file into the index.html file with <script> tag
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', './public/index.html'),
    }),
    // new BundleAnalyzerPlugin(),
    // new CopyPlugin({
    //   patterns: [{ from: 'source', to: 'dest', noErrorOnMissing: true }],
    // }),
  ],
}
