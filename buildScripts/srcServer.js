// Source file to create express server and relay webpage

// step 1 . Get the Express module API
var Express = require('express');
// step 2 Get the Path module API
var Path = require('path');
// define listen port
var PORT = 3000;

// step3 , create Express instance

var app = Express();

// create callback here for server request

let processRequest = (req,res) => {

  // If returning just plain test string , use res.send()
  //  res.send("Hello Node from Express!");

  // If we want to return file then use Path module API and res.sendFile()
  res.sendFile(Path.join(__dirname,'../src/index.html'));

}

// register request calllback for root directory
app.get('/', processRequest);

// create server by configuring listen()

app.listen(PORT, (err)=>{

  if(err){

    console.log("Server encountered some error :"+err);

  }else {
    console.log(`Express server listening on ${PORT}`);
  }

});



