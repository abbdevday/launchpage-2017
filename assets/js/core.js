(function (window, $) {
    'use strict';

    var win = $(window),
        wrap = $('.wrap'),
        wraph,
        backstretch,
        w, h,
        mask = $('.nice-mask'),
        onWindowResize = function (t) {
            var maxp = 0;

            w = win.width();
            h = win.height();
            wraph = wrap.height();

            wrap.animate(true, true).animate({
                'margin-top': (wraph < h ? parseInt((h - wraph) / 2, 10) : 20),
                'opacity': 1
            },
            t,
            function () {
                $('body').css({
                    'overflow': 'inherit'
                });
            });

            recalculateMask();
        },
        recalculateMask = function () {
            mask.css({
                top: win.scrollTop(),
                height: win.scrollLeft()
            });
        };

    if ($.isArray(sliderImages)) {
        backstretch = $.backstretch(sliderImages, {
            duration: sliderDuration,
            fade: sliderFadeDuration,
            easing: sliderEasingType
        });
    }



    $(window).resize(onWindowResize);
    $(window).scroll(recalculateMask);
    onWindowResize(200);
})(window, $);
