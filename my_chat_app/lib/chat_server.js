
var gestnumber = 0;
var nicknames = {};
var allNames = []
var createChat = function (server) {
  var io = require('socket.io')(server);
    io.on('connection', function (socket) {

      gestnumber += 1
      var nickName = "guest " + gestnumber
      nicknames[socket.id] = nickName
      allNames.push(nickName)


      socket.emit('nickNameChange', { newName: nickName })
      // socket.emit('updateRoom', { guests: allNames })

      socket.on('message',function(data){
        console.log(nicknames[socket.id], data.nickName)
        nicknames[socket.id] = data.nickName
        io.emit('response', {text: data.text, nickName: data.nickName})

      });


    });

}
exports.createChat = createChat;