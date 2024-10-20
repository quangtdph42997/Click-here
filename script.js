window.onload = function() {
    $(function() {
        var string = "Adududu";
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
