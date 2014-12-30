/* REQUIRES JQuery.numeric */
/* GITHUB: https://github.com/andrejleal */

(function ($) {
	$.fn.numberPlusMinus = function (action, options) {
		if ( (!action && !options) || action == '' || action == 'addBehavior' || action == null) {

			if(action != 'addBehavior') {
				$(this).append("<input type='button' value='-' class='minus' />");
				$(this).append("<input type='text' value='1' class='counter numeric' />");
				$(this).append("<input type='button' value='+' class='plus' />");
			}

			$(this).children('input.counter').numeric();
			$(this).children('input.counter').change(
				function(){
					var currentVal = parseInt($(this).val());
					if(isNaN(currentVal) || currentVal==0){
						$(this).val(1);
					}
				}
			);
			$(this).children("input.numeric").numeric();
			$(this).children('.plus').click(function(e){
				// Stop acting like a button
				e.preventDefault();

				var counter = $(this).parent().children('input.counter');
				var currentVal = parseInt(counter.val());
				// If is not undefined
				if (!isNaN(currentVal)) {

					if(currentVal==-1){
						//avoid zero
						counter.val(1);
					}
					else {
						// Increment
						counter.val(currentVal + 1);
					}
				} else {
					// Otherwise put a 0 there
					counter.val(0);
				}
			});

			// This button will decrement the value till 0
			$(this).children(".minus").click(function(e) {
				// Stop acting like a button
				e.preventDefault();
				var counter = $(this).parent().children('input.counter');
				// Get its current value
				var currentVal = parseInt(counter.val());
				// If it isn't undefined or its greater than 0
				if (!isNaN(currentVal)) {
					if(currentVal==1){
						//avoid zero
						counter.val(-1);
					}
					else {
						// Decrement one
						counter.val(currentVal - 1);
					}

				} else {
					// Otherwise put a 0 there
					counter.val(1);
				}
			});

		}
		else if (action == 'value') {
			return $(this).children('.counter').val();
		}
		else if (action == 'destroy') {
			$(this).html('');
		}
	}
})(jQuery);