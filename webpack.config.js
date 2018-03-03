const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-pulgin');

module.exports = {
    entry: "./li/b.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "out.js"
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|jpg|gif)$/, use: ['file-loader', 'url-loader'] },
            { test: /\.html$/, use: ['html-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./lyd/register/kaitou jiewei.html',
            filename:'regis.html',
            minify: {
                removeComments: true,
                collapseWhitespace: false //删除空白符与换行符
            },
            // hash:true
        })
    ]
}