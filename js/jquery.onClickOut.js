/* GITHUB: https://github.com/andrejleal */

(function ($) {
    $.fn.onClickOut = function (funcToExecute) {

        var element = $(this);
        var eventHandlerName = 'click.onClickOut' + ((new Date().getTime()));
        $(document).bind(eventHandlerName, function (e) {
            var $clicked = $(e.target);
            if (!($clicked.is(element) || $clicked.parents().is(element))){
                funcToExecute(element);
                $(document).unbind(eventHandlerName);
                e.stopPropagation();
            }
        });
    }
})(jQuery);