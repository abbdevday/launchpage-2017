(function (window, $) {
    'use strict';

    var win = $(window),
        backstretch,
        mask = $('.nice-mask'),
        onWindowResize = function (t) {
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
