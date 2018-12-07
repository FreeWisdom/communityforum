const path = require('path');
const HTMLPlugin =require('html-webpack-plugin');

module.exports = {
	entry: {
		appClient: path.join(__dirname, '../client/appClient.js')
	},
	output: {
		filename: '[name].[hash].js',
		path: path.join(__dirname, '../dist'),
		publicPath: ''
	},
	module: {
		rules: [{
			test: /.jsx$/,
			loader: 'babel-loader'
		},{
			test: /.js$/,
			loader: 'babel-loader',
			exclude: [
				path.join(__dirname, '../node_modules')
			]
		}]
	},
	plugins: [
		new HTMLPlugin()
	]
}