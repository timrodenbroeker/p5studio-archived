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

	if (busy) {
		textAlign(CENTER, CENTER);
		fill('#ffffff');
		push();
		translate(width / 2, height / 2);
		textSize(33);
		text('loading image...', 0, 0);
		pop();
	} else {
		// Display the manipulated image

		poster.push();
		poster.translate(State.imageX, State.imageY);
		poster.image(manipulatedImage, 0, 0);
		poster.pop();

		// Display the sourceImage image
		// poster.image(sourceImage, 250, 0);

		type();
		metaInfos();

		mouseDrag();

		dust();

		// Draw the poster on the square
		push();
		translate(width / 2, height / 2);
		image(poster, 0, 0);
		pop();
	}
}
