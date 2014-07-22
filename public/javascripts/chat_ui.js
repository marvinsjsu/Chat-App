$(document).ready(function () {
  var socket = io.connect();
  
  socket.on('from_node_event', function (data) {
    var $li = $('<li>');
    $li.text(data.message);

    $('#log').append($li);
  });  
  
  var chat = new Chat(socket);
  
  $('form').on('submit', function (event) {
    event.preventDefault();
    var message = $('textarea').val();
    chat.sendMessage(message);
  });  
});


