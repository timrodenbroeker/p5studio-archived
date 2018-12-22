var visualX = posterW - 130,
	visualY = posterH - 200,
	visualOffsetX = 0,
	visualOffsetY = 0,
	dragging = false,
	rollover = false;

function drawVisual() {
	push();
	translate(visualX, visualY);
	rotate(radians(State.artworkRotation));

	for (var i = 0; i < State.artworkAmount; i++) {
		if (i % 2 == 0) {
			fill(palette[State.palette][0]);
		} else {
			fill(palette[State.palette][2]);
		}
		push();

		rotate(radians(State.artworkPhase * i * 0.01));
		rect(0, i * State.artworkMargin, 50 + i * 4, State.artworkLineH);
		pop();
	}

	pop();

	// Is mouse over object
	if (mouseX > 0 && mouseX < posterW && mouseY > 0 && mouseY < posterH) {
		rollover = true;
	} else {
		rollover = false;
	}

	if (dragging) {
		visualX = mouseX + visualOffsetX;
		visualY = mouseY + visualOffsetY;
	}
}
