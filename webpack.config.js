var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
	entry: {
		app: [
			'webpack/hot/dev-server', 
			'./app/js/app.jsx'
		]
	},
	output: {
		path: './public/js/build',
		filename: 'main.js'
	},
	devServer: {
		contentBase: './public',
		publicPath: 'http://localhost:8080/build/'
	},
	resolve: {
		root: path.resolve('./app/js'),
		extensions: ['', '.js', '.jsx']
	},
	module: {
		exprContextCritical: false,
		loaders: [
		{ 
			test: /\.(jsx|js)$/, 
			loader: 'babel-loader', 
			exclude: /(node_modules|bower_components)/,
			query: {
				presets:['es2015', 'react']
			}
		}, { 
			test: /\.css$/, 
			loader: 'style-loader!css-loader!postcss-loader' 
		}, { 
			test: /\.scss$/, 
			loader: 'style-loader!css-loader!postcss-loader!sass-loader'
		}]
	},
	postcss: function () {
        return [precss, autoprefixer];
    },
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}
