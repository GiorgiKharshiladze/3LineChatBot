const $chat = $(".chat");
const $textarea = $(".my-text");
const $button = $(".button");

function addZero(num) {
  return (num < 10) ? "0"+num : num;
}

function getTime(){
    var date = new Date();
    return addZero(date.getHours())+':'+addZero(date.getMinutes());
}

function clearChat(){
    $chat.empty();
}

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

function sendMessage(isUser, text){    
    $chat.append(getMessage(isUser, text)).scrollTop($chat.prop('scrollHeight'));
    $textarea.val("");
}

// Event Listeners
$button.click(function(){
    $textarea.trigger({ type: 'keydown', which: 13, keyCode: 13 });
});

$textarea.on("keydown", function(e){
    if (e.which == 13) {
        var text = $(this).val();
        e.preventDefault();
        if (text !== "") {
            sendMessage(1, text);
        }
    }
});

// Manual triggers
sendMessage(1, "Hello 3Line");
sendMessage(0, "Hello User");
