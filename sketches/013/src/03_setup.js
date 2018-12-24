/*
 =========================================
 SETUP
   =========================================
   */

function setup() {
	imageMode(CENTER);
	rectMode(CENTER);

	// Create canvas
	var canvas = createCanvas(900, 900);
	canvas.parent('sketch');

	// The poster is a PGraphics-element
	poster = createGraphics(586, 810);

	manipulateImage();
	busy = false;

	// gui.js
	buildUI();

	// dust.js
	generateDust();
}
