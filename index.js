var http = require('http');
var express = require('express');

var app = express()
var server = http.createServer(app)
var port = process.env.PORT || 3000

app.use(express.static('./'))

server.listen(port, () => console.log(`Server runing at http://localhost:${port}/`))