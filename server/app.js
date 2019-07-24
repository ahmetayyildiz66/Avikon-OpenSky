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

// var requestLoop = setInterval(function() {
//   api_call
//     .API_Call(url)
//     .then(response => {
//       var result = parsing.parseFunc(response.states);
//       io.on('connection', function(socket){
//         console.log(socket.id)
//         socket.on('SEND_MESSAGE', function(data){
//           io.emit('MESSAGE', data)
//         });
//         socket.disconnect(true);
//       });

//       //res.json(result);
//     })
//     .catch(error => {
//       //res.send(error);
//     });
// }, 15000);

io.on('connection', (socket) =>{
  console.log(socket.id)
  var counter = 0;
  var requestLoop = setInterval(function(){
    counter++;
    api_call.API_Call(url)
      .then(response => {
        var result = parsing.parseFunc(response.states);
        //console.log('result: '+counter + " "+result);
        socket.emit('RESPONSE',result);
        // socket.on('SEND_MESSAGE', function(data){
        //   io.emit('MESSAGE', data)
        // });
      })
      .catch(error => {

      });
  }, 15000);
});



