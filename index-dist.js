'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var app = (0, _express2['default'])();
var server = _http2['default'].createServer(app);
var port = process.env.PORT;

app.use(_express2['default']['static']('./'));

server.listen(port, function () {
  return console.log('Server runing at http://localhost:' + port + '/');
});
