// Async image-loader and converter
// By Tim Rodenbröker

// To do:
// - Initial loading not working

// This variable holds the current image
var sourceImage;

// The canvas (PGraphics-element) that holds the manipulated image
var manipulatedImage;

// The busy-boolean is used to show a loading message while loading and converting
var busy = true;

// Initial Preload
function preload() {
	sourceImage = loadImage('./images/1.jpg');
}

// Setup
function setup() {
	noStroke();
	canvas = createCanvas(500, 300);
	manipulateImage();
	busy = false;
}

// Draw

function draw() {
	textAlign(CENTER, CENTER);
	textSize(33);
	if (busy) {
		background('#ff0000');
		text('Busy converting an image', width / 2, height / 2);
	} else {
		background('#ffffff');
		// Display the manipulated image
		image(manipulatedImage, 0, 0);

		// Display the sourceImage image
		image(sourceImage, 250, 0);
	}
}

// Get a new source image
function getNewSourceImage(value) {
	busy = true;
	sourceImage = loadImage('./images/' + value, function() {
		console.log(value + ' loaded');
		console.log(sourceImage);
		manipulateImage();
	});
}

// Manipulate image
function manipulateImage() {
	var srcImgW = sourceImage.width;
	var srcImgH = sourceImage.height;

	// assign the manipulatedImage to a new PGraphics-element
	manipulatedImage = createGraphics(srcImgW, srcImgH);
	for (var y = 0; y < srcImgH; y++) {
		for (var x = 0; x < srcImgW; x++) {
			var thisPixel = sourceImage.get(x, y);
			var grey = 255 - brightness(thisPixel) * 2.5;
			manipulatedImage.noStroke();
			manipulatedImage.fill(grey);
			manipulatedImage.rect(x, y, 1, 1);
		}
	}
	busy = false;
}
