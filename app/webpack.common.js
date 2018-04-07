const path = require('path');


module.exports = {
    entry: {
        index: './client/index/main.js',
        info: './client/info/main.js'
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './server/public/bundles'),
        filename: 'common.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');
//
// module.exports = {
//     entry: './resources/index/main.js',
//     output: {
//         filename: '[name].bundle.js',
//         chunkFilename: '[name].bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//         publicPath: '/'
//     },
//     plugins: [
//         new CleanWebpackPlugin(['dist']),
//         new HtmlWebpackPlugin({
//             title: 'Output Management'
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'common' // Specify the common bundle's name.
//         }),
//         new webpack.NamedModulesPlugin(),
//         new webpack.HotModuleReplacementPlugin(),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [
//                     'style-loader',
//                     'css-loader'
//                 ]
//             },
//             {
//                 test: /\.(png|jpeg|jpg|gif|svg)$/,
//                 use: [
//                     'file-loader'
//                 ]
//             },
//             {
//                 test: /\.(ttf|woff|woff2|otf|eot)$/,
//                 use: [
//                     'file-loader'
//                 ]
//             }
//         ]
//     }
// };