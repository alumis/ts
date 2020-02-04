const Webpack = require("webpack");
const Path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const packageJson = require("./package.json");

module.exports = options => {

  for (let p of ["path"])
    if (!options[p])
      throw new Error(`Missing property '${p}}'`);

  let isDevelopment = !!options.isDevelopment, babelLoaderPresets = ["@babel/preset-typescript"];

  let constants = {
    IS_DEV: JSON.stringify(isDevelopment),
    IS_PROD: JSON.stringify(!isDevelopment),
    VER: JSON.stringify(packageJson.version),
  };

  if (options.constants) {
    for (let p in options.constants)
      constants[p] = JSON.stringify(options.constants[p]);
  }

  if (!isDevelopment)
    babelLoaderPresets.push(["@babel/preset-env", { useBuiltIns: "entry", corejs: 3 }]);

  let result = {

    entry: {
      main: "./src/index.tsx"
    },
    output: {
      globalObject: "self",
      filename: "[name].[contenthash].js",
      path: Path.resolve(__dirname, "./", options.path),
      publicPath: "/"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".scss"],
      modules: ["node_modules"]
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "babel-loader",
          options: {
            sourceType: "unambiguous",
            presets: babelLoaderPresets,
            plugins: [
              "@babel/proposal-class-properties",
              "module:@alumis/babel-plugin-transform-jsx",
              "@babel/plugin-syntax-dynamic-import",
            ]
          }
        },
        {
          test: /\/src\/index.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "@teamsupercell/typings-for-css-modules-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: isDevelopment ? "[path][name]__[local]" : "[hash:base64]"
                },
                localsConvention: "camelCaseOnly",
                sourceMap: isDevelopment
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: function () {
                  return [
                    require("precss"),
                    require("autoprefixer")
                  ];
                }
              }
            },
            "sass-loader"
          ]
        },
        {
          test: /\.scss$/,
          exclude: [/\/src\/index.scss$/],
          use: [
            "style-loader",
            "@teamsupercell/typings-for-css-modules-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: isDevelopment ? "[path][name]__[local]" : "[hash:base64]"
                },
                localsConvention: "camelCaseOnly",
                sourceMap: isDevelopment
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: function () {
                  return [
                    require("precss"),
                    require("autoprefixer")
                  ];
                }
              }
            },
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new Webpack.DefinePlugin(constants),
      new HtmlWebpackPlugin({
        title: "Alumis app",
        template: "./src/index.html",
        filename: "index.html",
        inlineSource: ".(js|css)$",
      }),
      new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })
    ]
  };

  if (isDevelopment) {
    result.devtool = "inline-source-map";
  }

  else {
    //result.devtool = "nosources-source-map"; // https://github.com/webpack/webpack/issues/5491
    result.optimization = { minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()] };
  }

  return result;
};