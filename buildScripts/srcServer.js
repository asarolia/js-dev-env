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
import express from 'express';
// step 2 Get the Path module API
import path from 'path';
// step 3 Import Open module API
import open from 'open';

// define listen port
var PORT = 3000;

// step3 , create Express instance

var app = express();


// create callback here for server request

let processRequest = (req,res) => {

  // If returning just plain test string , use res.send()
  //  res.send("Hello Node from Express!");

  // If we want to return file then use Path module API and res.sendFile()
  res.sendFile(path.join(__dirname,'../src/index.html'));

}

// register request calllback for root directory
app.get('/', processRequest);

// create server by configuring listen()

app.listen(PORT, (err)=>{

  if(err){

    console.log("Server encountered some error :"+err);

  }else {

    // Now, if we want browser window to automatically open when server is created, we can utilize OPen
    open('http://localhost:'+PORT);

    console.log(`Express server listening on ${PORT}`);
  }

});



