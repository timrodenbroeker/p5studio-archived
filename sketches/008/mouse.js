function mousePressed() {
	// Did I click on the rectangle?
	if (rollover) {
		dragging = true;
		// If so, keep track of relative location of click to corner of rectangle
		visualOffsetX = State.visualX - mouseX;
		visualOffsetY = State.visualY - mouseY;
	}
}

function mouseReleased() {
	// Quit dragging
	dragging = false;
}
