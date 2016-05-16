var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
	cache: true,
	entry: './src/calendar.jsx',
	externals: [{
	    "react": {
	    	root: "React",
	        commonjs2: "react",
	        commonjs: "react",
	        amd: "react"
	    }
	}],
	output: {
		path: './lib',
		filename: 'day-calendar.js',
		library: "ReactDayCalendar",
	    libraryTarget: "umd"
	},
	resolve: {
		root: path.resolve('./src'),
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
		new webpack.DefinePlugin({
    		// Signal production, so that webpack removes non-production code that
    		// is in condtionals like: `if (process.env.NODE_ENV === "production")`
    		"process.env.NODE_ENV": JSON.stringify("production")
    	})
	]
}
