const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");

const packageJson = require("./package.json");

const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = options => {

    for (let p of ["path", "targets"])
        if (!options.hasOwnProperty(p))
            throw new Error(`Missing property '${p}}'`);

    let isDevelopment = !!options.isDevelopment;

    let constants = {
        IS_DEV: JSON.stringify(isDevelopment),
        IS_PROD: JSON.stringify(!isDevelopment),
        VER: JSON.stringify(packageJson.version),
    };

    if (options.constants) {
        for (let p in options.constants)
            constants[p] = JSON.stringify(options.constants[p]);
    }

    let copyWebpackPluginArgs = [
        "./src/fonts",
        "./src/require.min.js"
    ];

    let babelLoaderPresets = ["@babel/preset-typescript"];

    if (!isDevelopment)
        babelLoaderPresets.push(["@babel/preset-env", { targets: options.targets, useBuiltIns: "usage", corejs: 3, debug: true }]);

    let result = {

        performance: { hints: false },

        entry: {
            main: "./src/index.tsx"
        },
        output: {
            globalObject: "self",
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "./", options.path),
            publicPath: "/"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".scss"],
            modules: ["node_modules"]
        },
        module: {
            rules: [
                // {
                //     test: /\.worker\.ts$/,
                //     use: { loader: 'worker-loader' }
                // },
                {
                    test: /\.(js|ts|tsx)$/,
                    exclude: /\/monaco-editor/,
                    loader: "babel-loader",
                    options: {
                        ignore: [ // See https://github.com/webpack/webpack/issues/4039 and https://stackoverflow.com/questions/52407499/how-do-i-use-babels-usebuiltins-usage-option-on-the-vendors-bundle/52415747#52415747
                            /\/core-js/
                        ],
                        sourceType: "unambiguous",
                        presets: babelLoaderPresets,
                        plugins: [
                            "./src/getPackageFiles-babel-plugin",
                            "@babel/proposal-class-properties",
                            ["@babel/plugin-transform-react-jsx", { pragma: "createNode", pragmaFrag: "null" }],
                            "@babel/plugin-syntax-dynamic-import",
                        ]
                    }
                },
                {
                    test: /^.+\/src\/Website\/index.scss$/,
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
                    exclude: [/^.+\/src\/Website\/index.scss$/, /\/monaco-editor/],
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
                },
                {
                    test: /\/monaco-editor\/.+\.ts?$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\/monaco-editor\/.+\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\/monaco-editor\/.+\.ttf$/,
                    use: ['file-loader']
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin(constants),
            new HtmlWebpackPlugin({
                title: packageJson.title,
                template: "./src/index.html",
                filename: "index.html",
                inlineSource: ".(js|css)$",
                //favicon: "./Client/src/favicon.ico"
            }),
            //new HtmlWebpackInlineSourcePlugin(),
            new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
            new CopyWebpackPlugin(copyWebpackPluginArgs)
        ]
    };

    if (isDevelopment) {
        result.devtool = "inline-source-map";
    }

    else {
        result.devtool = "nosources-source-map"; // TODO: Not working?
        result.optimization = { minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()] };
    }

    let monaco = {
        mode: "development",
        entry: {
            "editor.worker": "monaco-editor/esm/vs/editor/editor.worker.js",
            "json.worker": "monaco-editor/esm/vs/language/json/json.worker",
            "css.worker": "monaco-editor/esm/vs/language/css/css.worker",
            "html.worker": "monaco-editor/esm/vs/language/html/html.worker",
            "ts.worker": "monaco-editor/esm/vs/language/typescript/ts.worker"
        },
        resolve: {
            extensions: [".ts", ".js"]
        },
        output: {
            globalObject: "self",
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, "./", options.path)
        },
        // module: {
        //   rules: [
        //     {
        //       test: /\.ts?$/,
        //       use: "ts-loader",
        //       exclude: /node_modules/
        //     },
        //     {
        //       test: /\.css$/,
        //       use: ["style-loader", "css-loader"]
        //     },
        //     {
        //       test: /\.ttf$/,
        //       use: ['file-loader']
        //     }
        //   ]
        // }
    }

    return [result, monaco];
};