const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // 指定静态内容的位置，避免图片等找不到资源
        disableHostCheck: true,
        contentBase: path.join(__dirname, '../src/'),
        port: 8083
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },
    plugins: [
        // 热替换模块
        new webpack.HotModuleReplacementPlugin()
    ]
})
