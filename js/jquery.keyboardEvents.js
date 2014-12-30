
//////////////////////////////////////////////////////////////////////////////////////
//// keyboardEvents                                                             //
//////////////////////////////////////////////////////////////////////////////////////
//// Options                                                                        //
//// {                                                                              //
//// Enter                                                                          //
//// KeyUp                                                                          //
//// KeyDown                                                                        //
//// KeyLeft                                                                        //
//// KeyRight                                                                       //
//// Space                                                                          //
//// Escape                                                                         //
//// Delete                                                                         //
//// Backspace                                                                      //
//// Tab                                                                            //
//// }                                                                              //
//////////////////////////////////////////////////////////////////////////////////////


( function ($) {
    $.fn.keyboardEvents = function (options) {
        
        $(this).keydown(function (event) {
            var keypressed = event.keyCode || event.which;
            if (keypressed == 13 && typeof options.Enter!= 'undefined') {
                return options.Enter();
            }
            if (keypressed == 38 && typeof options.KeyUp!= 'undefined') {
                return options.KeyUp();
            }
            if (keypressed == 40 && typeof options.KeyDown!= 'undefined') {
                return options.KeyDown();
            }
            if (keypressed == 37 && typeof options.KeyLeft!= 'undefined') {
                return options.KeyLeft();
            }
            if (keypressed == 39 && typeof options.KeyRight!= 'undefined') {
               return  options.KeyRight();
            }
            if (keypressed == 32 && typeof options.Space!= 'undefined') {
               return options.Space();
            }
            if (keypressed == 27 && typeof options.Escape!= 'undefined') {
               return options.Escape();
            }
            if (keypressed == 46 && typeof options.Delete!= 'undefined') {
               return options.Delete();
            }
            if (keypressed == 8 && typeof options.Backspace!= 'undefined') {
               return options.Backspace();
            }
            if (keypressed == 9 && typeof options.Tab!= 'undefined') {
               return options.Tab();
            }           
        });
    }

})(jQuery);