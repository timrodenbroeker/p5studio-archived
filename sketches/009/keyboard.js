document.onkeyup = function(e) {
	// SAVE IMAGE WITH S

	if (e.keyCode == 83) {
		save('out' + imgCounter + '.jpg');
		imgCounter += 1;
	}
};
