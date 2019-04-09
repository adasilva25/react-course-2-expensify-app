// entry --> output
// https://webpack.js.org/  -->     https://webpack.js.org/concepts
// https://www.npmjs.com/package/css-loader

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('styles.css');

module.exports = (env) => {
    const isProduction = env === 'production';

    console.log('env', env)
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),   // https://nodejs.org/api/path.html
            filename: 'bundle.js'
        },
        module: {
            rules:[{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,   // Makes s optional
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}