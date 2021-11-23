import * as webpack from "webpack";
import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";


export default function (mode: webpack.Configuration["mode"], targets: string): webpack.Configuration {

    let veracityStatus = {
        mode,
        entry: "./src/index.tsx",
        output: {
            filename: "[name].[contenthash].js",
            globalObject: "self",
            path: path.resolve(__dirname, "./build"),
            clean: true
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".scss"],
            modules: ["node_modules"],
            fallback: {
                assert: require.resolve("assert/"),
                util: require.resolve("util/")
            },
            alias: {
                "@alumis/ts-async": path.resolve(__dirname, "../../ts-async"),
                "@alumis/ts-jsx": path.resolve(__dirname, "../"),
                "@alumis/ts-observables": path.resolve(__dirname, "../../ts-observables")
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: "pre" as any,
                    use: ["source-map-loader"],
                },
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            sourceType: "unambiguous",
                            presets: [
                                ["@babel/env", {
                                    useBuiltIns: "usage",
                                    corejs: 3,
                                    targets: targets,
                                }],
                                "@babel/typescript"
                            ],
                            plugins: [
                                "module:@alumis/babel-plugin-transform-jsx"
                            ]
                        }
                    }
                },
                {
                    test: /\.(png|jpg|gif|svg|ttf)$/i,
                    type: "asset/resource"
                },
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                IS_DEVELOPMENT: JSON.stringify(mode === "development"),
                IS_PRODUCTION: JSON.stringify(mode === "production"),
                VERSION: JSON.stringify(process.env.npm_package_version),
            }),
            new webpack.ProvidePlugin({
                Buffer: ["buffer", "Buffer"],
                process: "process/browser"
            }),
            new HtmlWebpackPlugin({
                title: "@alumis/ts-jsx/test-workspace",
                template: "./src/index.html",
                filename: "index.html"
            })
        ]
    };

    return veracityStatus;
};

declare module "webpack" {
    interface Configuration {
        //devServer?: import("webpack-dev-server").Configuration;
    }
}