const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        main: './src/main.js',
        snow: './src/third/snow.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // vue文件加载器
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            // css loader
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 图片loader
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // 字体loader，my-font.woff，此处没有引入字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // es6
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack demo',
            filename: 'index.html', // 新创建的html的名称
            template: './public/index.html', // 根据这个路径下的html为模板来创建新的html
            // chunks和entry对应
            chunks: [
                'snow',
                'main'
            ]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.ProvidePlugin({
            Vue: ['vue/dist/vue.esm.js', 'default']
        })
    ],
    mode: 'development',
    // 开发工具，浏览器中可以搜索到实际文件名
    devtool: 'source-map',
    // 模块热替换
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
        port: 9000,
        hot: true
    }
};