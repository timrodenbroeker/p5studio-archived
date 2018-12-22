function mousePressed() {
	// Did I click on the rectangle?
	if (rollover) {
		dragging = true;
		// If so, keep track of relative location of click to corner of rectangle
		visualOffsetX = visualX - mouseX;
		visualOffsetY = visualY - mouseY;
	}
}

function mouseReleased() {
	// Quit dragging
	dragging = false;
}
