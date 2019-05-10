"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _open = _interopRequireDefault(require("open"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Source file to create express server and relay webpage
// Once Babel is configured we can change the CommonJS pattern to ES6
// CommonJS pattern
// // step 1 . Get the Express module API
// var express = require('express');
// // step 2 Get the Path module API
// var path = require('path');
// // step 3 Import Open module API
// var open = require('open');
// ES6 pattern
// step 1 . Get the Express module API
// step 2 Get the Path module API
// step 3 Import Open module API
// define listen port
var PORT = 3000; // step3 , create Express instance
//var app = express();
// For ES6

var app = (0, _express["default"])(); // create callback here for server request

var processRequest = function processRequest(req, res) {
  // If returning just plain test string , use res.send()
  //  res.send("Hello Node from Express!");
  // If we want to return file then use Path module API and res.sendFile()
  res.sendFile(_path["default"].join(__dirname, '../src/index.html'));
}; // register request calllback for root directory


app.get('/', processRequest); // create server by configuring listen()

app.listen(PORT, function (err) {
  if (err) {
    console.log("Server encountered some error :" + err);
  } else {
    // Now, if we want browser window to automatically open when server is created, we can utilize OPen
    (0, _open["default"])('http://localhost:' + PORT);
    console.log("Express server listening on ".concat(PORT));
  }
});