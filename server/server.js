const express = require('express');
const ReactSSR = require('react-dom/server');
const appServer = require('../dist/appServer.js').default;
const app = express();

app.get('*', function(req, res) {
	res.send(ReactSSR.renderToString(appServer))
})

app.listen('3333', function() {
	console.log('server is listening 3333')
})