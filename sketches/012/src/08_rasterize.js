/*
 =========================================
 Rasterize image
   =========================================
   */

// Get a new source image
function getNewSourceImage(value) {
	busy = true;
	sourceImage = loadImage('../../images/' + value, function() {
		console.log(value + ' loaded');
		console.log(sourceImage);
		manipulateImage();
	});
}

// Manipulate image
function manipulateImage() {
	sourceImage.resize(180, 0);

	var srcImgW = sourceImage.width;
	var srcImgH = sourceImage.height;

	var ratio = srcImgH / srcImgW;

	// assign the manipulatedImage to a new PGraphics-element
	// manipulatedImage = createGraphics(srcImgW, srcImgH);

	var gridItemW = (srcImgW / State.gridCols) * State.imageScalar;

	console.log('gridItemW', gridItemW);

	var mImgW = parseInt(State.gridCols * gridItemW);
	var mImgH = parseInt(mImgW * ratio);

	var gridRows = State.gridCols * ratio;
	// var mImgH = 80;

	console.log('mImgW', mImgW, 'mImgH', mImgH);

	console.log('cols', State.gridCols, 'rows', gridRows);

	// Create PGraphics
	manipulatedImage = createGraphics(mImgW, mImgH);

	// Fill and stroke
	manipulatedImage.noStroke();
	manipulatedImage.fill(State.Colors.image);

	// BUG!
	// The loop draws only a grid of 60 tiles instead of 180

	manipulatedImage.background('#ff0000');

	for (var y = 0; y < gridRows; y++) {
		for (var x = 0; x < State.gridCols; x++) {
			var stepX = x * gridItemW;
			var stepY = y * gridItemW;

			// get the right pixel
			var thisPixel = sourceImage.get(stepX, stepY);
			var brightn = brightness(thisPixel);

			// calculate the size of the rectangle
			var size = map(brightn, 255, 0, 1, State.maxSize);

			manipulatedImage.push();
			manipulatedImage.translate(stepX * State.imageScalar, stepY * State.imageScalar);
			manipulatedImage.rect(0, 0, size, size);
			manipulatedImage.pop();
		}
	}
	busy = false;
}
