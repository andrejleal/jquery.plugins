/* GITHUB: https://github.com/andrejleal */

//////////////////////////////////////////////////////////////////////////////////////
//  JQUERY SCROLL TO TOP PLUGIN					                                    //
//////////////////////////////////////////////////////////////////////////////////////
//// Options                                                                        //
//// {                                                                              //                                                                     //
//// }                                                                              //
//////////////////////////////////////////////////////////////////////////////////////
(function ($) {
    $.fn.scrollToTop = function () {
        $(this).bind('click.scrollToTop', function () {
                $('html, body').animate({ scrollTop: 0 }, 'fast'); 
            }
        );
    }
})(jQuery);