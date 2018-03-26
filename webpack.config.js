let path = require('path');
let targetPath = path.join(__dirname, 'public')

module.exports = {
    entry: './src/app.js',
    output: {
        path: targetPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: targetPath,
        historyApiFallback: true
    },
    mode: 'development'
}