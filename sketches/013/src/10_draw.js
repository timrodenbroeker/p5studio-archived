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
		poster.background('#ff0000');
		poster.text('Busy converting an image', width / 2, height / 2);
	} else {
		// Display the manipulated image

		poster.push();
		poster.translate(State.imageX, State.imageY);
		poster.image(manipulatedImage, 0, 0);
		poster.pop();

		// Display the sourceImage image
		// poster.image(sourceImage, 250, 0);
	}
	type();
	metaInfos();

	mouseDrag();

	dust();

	// Draw the poster on the square
	push();
	translate(width / 2, height / 2);
	image(poster, 0, 0);
	pop();

	// DRAG AND DROP

	if (mouseX > 0 && mouseX < posterW && mouseY > 0 && mouseY < posterH) {
		rollover = true;
	} else {
		rollover = false;
	}

	if (dragging) {
		State.imageX = mouseX + imageOffsetX;
		State.imageY = mouseY + imageOffsetY;
	}
}
