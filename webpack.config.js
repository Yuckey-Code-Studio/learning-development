// 開発or本番モードの選択(development,production,noneのいずれか必須設定)
// development: 開発時のファイル出力モード
// production:  本番時のファイル出力モード
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = {
  mode: 'production',
  context: `${__dirname}/src/js`,
  entry: path.join(__dirname, '/src/js', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'htdocs/assets/js'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  target: ['web', 'es5'],
  plugins: [
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      // オリジナル関数をimportなしで使えるようにする。
      utils: [path.join(__dirname, 'src/js/utils'), 'default'],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
