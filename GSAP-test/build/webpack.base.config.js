const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './main.tsx',
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2048,
                            name: 'images/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2048,
                            name: 'fonts/[name].[hash:7].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.json', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.tpl.html"
        })
    ]
}