/*
 =========================================
 DRAW
   =========================================
   */

function draw() {
	background('#000000');

	poster.background(State.Colors.background);

	poster.rectMode(CORNER);

	poster.noStroke();

	if (gotChanges) {
		redrawImage();
		gotChanges = false;
	}

	// Neues Bild? Dann laden!

	if (currentImage != newImage) {
		img = loadImage('../../images/' + newImage, function() {
			convertImage();
			currentImage = newImage;
			imageIsLoaded = true;
		});
	}

	if (imageIsLoaded) {
		drawImage();
	} else {
		poster.text('loading', 0, 0);
	}

	type();
	metaInfos();

	mouseDrag();

	dust();

	// Draw the poster on the square
	image(poster, width / 2, height / 2);
}
