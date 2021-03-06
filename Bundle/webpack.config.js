const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
    },
    
    module: {
        rules: [
            {
                test: [/\.js$/, /\.mjs$/],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },  
            {
                test: /\.css$/i,
                use: ['css-loader', 'style-loader'],
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
}