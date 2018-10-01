"use strict";
(function ($) {
    $(function () {
        var ws = new WebSocket("ws://" + location.hostname + ":8680");
        ws.onopen = function () {
            push("Connected to server!");
        };
        ws.onmessage = function (message) {
            push(message.data.toString());
        };
        ws.onclose = function () {
            push("Disconnected from server!");
        };
        ws.onerror = function () {
            push("Error occurred!");
        };

        $("#message").on("keydown", function (event) {
            if (event.which === 13) {
                var $message = $("#message");
                ws.send($message.val());
                $message.val("");
            }
        });

        function push(message) {
            var $chat_box = $("#chat-box");
            $chat_box.append(message + "<br>");
            $chat_box.stop().animate({ scrollTop: $chat_box[0].scrollHeight }, 2000);
        }
    });
})(jQuery);
