const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = {                  
    entry: './src/main.js',        
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { 
                test: /\.(png|jpe?g|gif|mp3)$/i,
                use:  [
                    {
                        loader: 'file-loader',
                    },
                ]
            }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new BundleAnalyzerPlugin()
    ]

};