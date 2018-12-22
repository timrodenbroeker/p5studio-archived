var visualX = 100,
	visualY = 100,
	visualOffsetX = 0,
	visualOffsetY = 0,
	dragging = false,
	rollover = false;

function drawVisual() {
	for (var i = 0; i < 100; i++) {
		if (i % 2 == 0) {
			fill(palette[cSelectX][0]);
		} else {
			fill(palette[cSelectX][2]);
		}
		push();
		translate(visualX, visualY);
		rotate(radians(sliderPhase.value() * i * 0.01));
		rect(0, i, 50 + i * 4, 20);
		pop();
	}

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
