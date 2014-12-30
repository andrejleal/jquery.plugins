(function ($) {
    $.fn.loadOnBottom = function ( offset , callbackIfTrue , callbackIfFalse) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > $(document).height() - $(window).height() - offset) {
                callbackIfTrue();
            }
            else if( typeof callbackIfFalse != 'undefined') {
                callbackIfFalse();
            }
        });
    }
})(jQuery);