const path = require('path');

module.exports = {
	target: 'node',
	entry: {
		appServer: path.join(__dirname, '../client/appServer.js')
	},
	output: {
		filename: 'appServer.js',
		path: path.join(__dirname, '../dist'),
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [{
			test: /.jsx$/,
			loader: 'babel-loader'
		}, {
			test: /.js$/,
			loader: 'babel-loader',
			exclude: path.join(__dirname, '../node_modules')
		}]
	}
}