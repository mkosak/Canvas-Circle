(function($) {

    "use strict";

    /**
     * Global namespace for app
     *
     * @namespace
     */
    window.app = {

        /**
         * First function to run on page load
         */
        main: function(e) {
	    	app.dragObj = $('#drag');
	    	app.circle  = $('#circle').get(0);
			app.ctx = app.circle.getContext("2d");

			app.ctx.beginPath();
			app.ctx.arc(50, 50, 50, 0,2 * Math.PI);
			app.ctx.fillStyle = "red";
			app.ctx.fill();

			app.drag();
        },

        drag: function(e) {
        	app.dragObj.draggable({ revert: true });
        }
    };

    $(window).on('load', app.main);

})(jQuery);