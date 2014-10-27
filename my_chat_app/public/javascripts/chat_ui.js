(function () {

  if(typeof ChatApp === "undefined"){
    window.ChatApp = {}
  }


  $('.send-form').on('click', '.submit-add',function(event){
    event.preventDefault()
    var newChat = new ChatApp.Chat(socket)
    var $input = $('.send-form').find('.message')
    var text = $input.val()
    $input.val("")
    newChat.sendMessage([text, ChatApp.nickName])
  });


  $('.name-change-form').on('click', '.submit-new-name', function(event){
    event.preventDefault();
    var $nickName = $('.name-change-form').find('.change-name')
    var nickName = $nickName.val()
    $nickName.val("Your name: " + nickName)
    console.log(nickName)
    ChatApp.nickName = nickName;
  });

})();


