// Program Connects to Server and Reports changes

const socket = require("socket.io-client")("http://192.168.1.171:3000")

socket.on("connect", function() {
  console.log("Succesfully Connected to Server");

    socket.on("updateState", function(state){
    console.log("Updated the State for all Clients to: " + state)
  })
})
