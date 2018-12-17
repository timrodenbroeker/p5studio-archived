var imgCounter = 0;

document.onkeyup = function(e) {
	// SAVE IMAGE WITH S

	if (e.keyCode == 83) {
		save('out' + imgCounter + '.jpg');
		imgCounter += 1;
	} else if (e.keyCode == 80) {
		console.log(cSelectX);
		nextPalette();
	}
};

function nextPalette() {
	if (cSelectX < palette.length - 1) {
		cSelectX++;
	} else {
		cSelectX = 0;
	}
}
