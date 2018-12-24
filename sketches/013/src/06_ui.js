/*
 =========================================
 Keyboard
   =========================================
   */

document.onkeyup = function(e) {
	// SAVE IMAGE WITH S

	if (e.keyCode == 83) {
		// save('out' + imgCounter + '.jpg');
		// imgCounter += 1;
	}
};

/*
 =========================================
 Mouse
   =========================================
   */

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

function mouseDrag() {
	// Is mouse over object
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
