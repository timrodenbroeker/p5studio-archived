function mousePressed() {
	// Did I click on the rectangle?
	if (rollover) {
		dragging = true;
		// If so, keep track of relative location of click to corner of rectangle
		imageOffsetX = State.imageX - mouseX;
		imageOffsetY = State.imageY - mouseY;
	}
}

function mouseReleased() {
	// Quit dragging
	dragging = false;
}
