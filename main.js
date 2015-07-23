(function($) {
 
    $.fn.itsame = function(action, options) {
 
 		var opts = $.extend({}, $.fn.itsame.defaults, options);
 
        if ( action === "init") {
            // Init library
			this.filter("canvas").each(function() {
				var canvas = $(this);
				canvas.prop({width: 530, height: 530});
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