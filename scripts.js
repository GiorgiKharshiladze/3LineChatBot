
const $chat = $(".chat");
const $textarea = $(".my-text");
const $button = $(".button");

function getMessage(isUser, text){
    let cls = isUser ? ["bg-smk ", "ftr "] : ["bg-wht ", "ftl "];

    return '<li class="w100">' +
                '<div class="'+cls[0]+cls[1]+'w75 macro word-break">' +
                    '<div class="message">' +
                        '<div>'+ text +'</div>' +
                    '</div>' +
                '</div>' +
                '<div class="time '+cls[1]+'"><small>'+getTime()+'</small></div>' +
            '</li>';
}

function createMessage(isUser, text){
                        
    $chat.append(getMessage(isUser, text)).scrollTop($chat.prop('scrollHeight'));
    $textarea.val("");
}

function addZero(num) {
  return (num < 10) ? "0"+num : num;
}

function getTime(){
    var d = new Date();
    return addZero(d.getHours())+':'+addZero(d.getMinutes());
}

function clearChat(){
    $chat.empty();
}

$textarea.on("keydown", function(e){
    if (e.which == 13){
        var text = $(this).val();
        e.preventDefault();
        if (text !== ""){
            createMessage(1, text);
        }
    }
});

$button.click(function(){
    $textarea.trigger({type: 'keydown', which: 13, keyCode: 13});
})


//-- Print Messages
createMessage(1, "Hello 3Line");
createMessage(0, "Hello User");
