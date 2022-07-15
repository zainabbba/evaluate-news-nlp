const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry:'./src/client/index.js',  
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    output: {
        clean: true,
     libraryTarget: 'var',
     library: 'Client'
     
 },
    module: {

        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
},
{
    test: /\.scss$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  }
        ]
    },
    
 
    stats: { children: false }, //to fix the error-Entrypoint undefined=index.html  


    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: "./index.html",
        }),
 
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        
        new MiniCssExtractPlugin({ filename: "[name].css" }),

        
        new WorkboxPlugin.GenerateSW()
    ]
}
