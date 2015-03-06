$( document ).ready( function () {

	var vid         = $( '#bgvid' );
	var pauseButton = $( 'button' );

	function vidFade() {
		vid.addClass( 'stopfade' );
	}

	vid.on( 'ended', function() {
		// only functional if 'loop' is removed
		vid[0].pause();
		// to capture IE10
		vidFade();
	} );

	pauseButton.click( function () {
		vid.toggleClass( 'stopfade' );
		if ( vid[0].paused ) {
			vid[0].play();
			pauseButton.text( 'Pause' );
		} else {
			vid[0].pause();
			pauseButton.text( 'Paused' );
		}
	})

});

