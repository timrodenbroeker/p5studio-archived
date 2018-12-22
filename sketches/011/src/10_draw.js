/*
 =========================================
 DRAW
   =========================================
   */

function draw() {
	background('#000000');
	if (started) {
		poster.background(State.Colors.background);

		poster.rectMode(CORNER);

		poster.noStroke();

		if (gotChanges) {
			redrawImage();
			gotChanges = false;
		}

		// drawVisual();

		// console.log(currentImage, newImage);

		// Neues Bild? Dann laden!

		if (currentImage != newImage) {
			// console.log(currentImage, newImage);
			// console.log('LOAD IMAGE');
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

		if (showBranding) {
			branding();
			metaInfos();
		}
	}

	dust();

	image(poster, width / 2, height / 2);
}
