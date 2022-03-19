const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        "main": "./js/index.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    devServer: {
        port: 3000
    }
}