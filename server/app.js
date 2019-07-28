const express = require("express");
const app = express();


const api_call = require("./API_caller");
var parsing = require("./parseFunc");

const url =
  "https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226";

const server = app.listen(3000, () => {
  console.log("Listening on port: 3000");
});

var io = require('socket.io')(server);


io.on('connection', (socket) =>{
  var requestLoop = setInterval(function(){
    api_call.API_Call(url)
      .then(response => {
        var result = parsing.parseFunc(response.states);
        socket.emit('RESPONSE',result);
        
      })
      .catch(error => {

      });
  }, 15000);
});



