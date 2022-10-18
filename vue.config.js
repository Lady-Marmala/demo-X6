
const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,
  transpileDependencies: [],
  productionSourceMap: false,
  publicPath: "./",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("autoprefixer")({
            // 配置使用 autoprefixer
            overrideBrowserslist: ["last 15 versions"]
          }),
          require("postcss-pxtorem")({
            rootValue: 192,
            propList: ["*"]
          })
        ]
      }
    }
  },

  //热更新
  chainWebpack: config => {
    config.resolve.symlinks(true);
    config.optimization.delete("splitChunks");
    config.optimization.minimizer("terser").tap(args => {
      args[0].terserOptions.compress.drop_console = true;
      return args;
    });
  }
};
