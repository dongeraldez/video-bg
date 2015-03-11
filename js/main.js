$( document ).ready( function () {

	var videoId         = $( '#bgvid' );
	var pauseButton = $( 'button' );

	function vidFade() {
		videoId.addClass( 'stopfade' );
	}

	videoId.on( 'ended', function() {
		// only functional if 'loop' is removed
		videoId[0].pause();
		// to capture IE10
		vidFade();
	} );

	pauseButton.click( function () {
		videoId.toggleClass( 'stopfade' );
		if ( videoId[0].paused ) {
			videoId[0].play();
			pauseButton.text( 'Pause' );
		} else {
			videoId[0].pause();
			pauseButton.text( 'Paused' );
		}
	})

});

