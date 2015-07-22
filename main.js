(function($) {
 
    $.fn.itsame = function(action, options) {
 
 		var opts = $.extend({}, $.fn.itsame.defaults, options);
 
        if ( action === "init") {
            // Init library
			this.filter("canvas").each(function() {
				var canvas = $(this);
				var ctx = canvas.getContext("2d");
				
			});
        }
 
        if (action === "destroy") {
            // destroy library
        }
		
 		return this;
    };
 	
	 $.fn.itsame.defaults = {
		 
	 };
	 
}(jQuery));