$( document ).ready(function() {
	// Full Screen
    var $toggleScreen = $("#fullScreen");
    $toggleScreen.click(function(){
    	$(document).toggleFullScreen();
    });
    $(document).bind("fullscreenchange", function() {
		   $.getScript('js/script.js');
		});

  // Music


});
