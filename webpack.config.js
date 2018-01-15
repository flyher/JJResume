const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    // 'script/lib': [
    //   './src/lib/bootstrap-3.3.4-dist/bootstrap.min.js'
    // ],
    'script/app': [path.resolve(__dirname, './src/script/timeline.js')]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath:
      process.env.NODE_ENV === 'release'
        ? '/dist/'
        : 'http://localhost:8889/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        // eslint
        loader: 'eslint-loader',
        enforce: 'pre',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // ['babel-loader', 'eslint-loader']
        }
      },
      {
        test: /\.ts$/,
        // loader: 'ts-loader',
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader', 'postcss-loader']
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      // },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader'
      },

      // Use one of these to serve jQuery for Bootstrap scripts:

      // Bootstrap 4
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: 'imports-loader?jQuery=jquery'
      },

      // Bootstrap 3
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        use: 'imports-loader?jQuery=jquery'
      }
    ]
  },
  resolve: {
    extensions: ['.webpack.js', '.ts', '.js', 'tsx', 'css']
  },
  plugins: [
    // new ExtractTextPlugin("[name].css", {
    //   allChunks: true
    // }),
    new ExtractTextPlugin("style.css"),
    // 合并文件
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['common'],
    //   filename: 'common.js',
    //   minChunks: Infinity
    // }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    //   }
    // }),
    new CleanWebpackPlugin(
      // 匹配删除的文件
      // ['dist/scripts', 'dist/css', 'dist/src', 'dist/*.js'],
      ['dist/*'],
      {
        // 根目录
        root: __dirname,
        // 开启在控制台输出信息
        verbose: true,
        // 启用删除文件
        dry: false
      }
    ),
    // 拷贝文件
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname) + '/src/*.html',
        to: path.resolve(__dirname) + '/dist',
        toType: 'dir', // 可选，默认是文件 file 或者 dir
        force: true, // 强制覆盖先前的插件
        flatten: true,
        ignore: ['.*']
      }
    ])
  ],
  devtool: '#eval-source-map'
};
