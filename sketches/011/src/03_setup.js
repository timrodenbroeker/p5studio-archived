/*
 =========================================
 SETUP
   =========================================
   */

function setup() {
	imageMode(CENTER);
	var canvas = createCanvas(900, 900);
	canvas.parent('sketch');

	// The poster is a PGraphics-element
	poster = createGraphics(586, 810);

	// Generate Dust

	rectMode(CENTER);

	// Convert the initial image
	// frameRate(2);
	currentImage = '43.jpg';
	newImage = '43.jpg';
}
