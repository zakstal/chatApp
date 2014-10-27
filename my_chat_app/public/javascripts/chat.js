(function () {

  if(typeof ChatApp === "undefined"){
    window.ChatApp = {}
  }

  var Chat = ChatApp.Chat = function (socket) {
     this.socket = socket;
  }

  Chat.prototype.sendMessage = function (message) {
    var text = message[0]
    var nickName = message[1]
    console.log(text, "in send message")
    this.socket.emit('message', {text: text, nickName: nickName})

  };
})();
