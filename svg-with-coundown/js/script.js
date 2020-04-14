(function ($) {
    "use strict";
    let day = '2021/01/01 00:00:00';

    $('#days').countdown(day, function(event) {
        $(this).html(event.strftime('%D'));
        roundSVGStyle('.round-days', (event.strftime('%D')/365)*100);
    });

    $('#hours').countdown(day, function(event) {
        $(this).html(event.strftime('%H'));
        roundSVGStyle('.round-hours', (event.strftime('%H')/24)*100);
    });

    $('#minutes').countdown(day, function(event) {
        $(this).html(event.strftime('%M'));
        roundSVGStyle('.round-minutes', (event.strftime('%M')/60)*100);
    });

    $('#second').countdown(day, function(event) {
        $(this).html(event.strftime('%S'));
        roundSVGStyle('.round-second', (event.strftime('%S')/60)*100);
    });

    function roundSVGStyle(className='', percent=0 )
    {
        var $round = $(className),
            roundPercent = percent,
            roundCircum = 2 * 45 * Math.PI,
            roundDraw = roundPercent * roundCircum / 100;
        $round.attr('style', `stroke-dasharray: ${roundDraw} 999`);
    }
})(jQuery);
