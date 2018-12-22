/*
 =========================================
 CONVERT IMAGE
   =========================================
   */

function convertImage() {
	console.log(img);
	// console.log('loaded', img);

	console.log('aaaa', gridRows);

	gridItemW = imgW / State.gridCols;

	for (var y = 0; y < State.gridRows; y++) {
		var pickY = Math.floor(y * gridItemW);

		grid[y] = [];
		for (var x = 0; x < State.gridCols; x++) {
			var pickX = Math.floor(x * gridItemW);

			var pickedColor = img.get(pickX, pickY);

			var bri = brightness(pickedColor);

			grid[y][x] = bri;
		}
	}
	gotChanges = true;
	// console.log('converted', img);
}

/*
 =========================================
 DRAW IMAGE
   =========================================
   */

function drawImage() {
	poster.push();
	poster.noStroke();

	poster.translate(State.imageX, State.imageY);

	poster.image(pg, 0, 0);

	poster.pop();

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

	// image(img, 200, 200);
}
