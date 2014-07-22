var io = require('socket.io');

exports.createChat = function (server) {
  io = io.listen(server);
  io.on('connection', callback);
};

var callback = function(socket) {
    console.log("new connection!");
  
    socket.emit('from_node_event', { message: 'Hi from node!' });
    
    socket.on('from_browser_event', function(data) {
      console.log(data);
      io.sockets.emit('from_node_event', { message: data.message });
    });
};