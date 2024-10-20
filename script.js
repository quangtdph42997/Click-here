window.onload = function() {
    $(function() {
        var string = "Happy Women's Day!!! October 20 \n Chúc mẹ yêu và các bạn nữ một ngày 20/10 thật tuyệt vời và đặc biệt!";
        var q = jQuery.map(string.split(''), function(letter) {
            return $('<span>' + letter + '</span>');
        });
        var dest = $('#ghost');
        var c = 0;
        var i = setInterval(function() {
            q[c].appendTo(dest).hide().fadeIn(900);
            c += 1;
            if (c >= q.length)
                clearInterval(i);
        }, 200);
    });
}
