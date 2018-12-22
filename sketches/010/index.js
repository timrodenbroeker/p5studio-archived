var imageOffsetX = 0,
	imageOffsetY = 0;

var rects = [];

var started = false;

var currentImage = '43.jpg';
var newImage = '43.jpg';

var imageIsLoaded = false;

/*
 =========================================
 SETUP
   =========================================
   */

function setup() {
	var poster = createCanvas(586, 810);
	poster.parent('sketch');
	rectMode(CENTER);

	for (var i = 0; i < 100; i++) {
		rects.push({
			x: random(posterW),
			y: random(posterH),
			w: random(5),
			h: random(5),
		});
	}
	convertImage();
	// frameRate(2);
}

/*
 =========================================
 DRAW
   =========================================
   */

function draw() {
	if (started) {
		background(State.Colors.background);

		rectMode(CORNER);

		noStroke();

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
			text('loading', width / 2, height / 2);
		}

		if (showBranding) {
			branding();
			metaInfos();
		}

		// fill(State.Colors.background);
		// for (var i = 0; i < rects.length; i++) {
		// 	rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
		// }
	}
}
