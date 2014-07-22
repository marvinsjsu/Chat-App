var Chat = function (socket) {
  this.socket = socket;
};

Chat.prototype.sendMessage = function (message) {
  this.socket.emit('from_browser_event', { message: message })
};