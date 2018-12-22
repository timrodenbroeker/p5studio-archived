var ImageOffsetX = 0,
	ImageOffsetY = 0,
	dragging = false,
	rollover = false;

var img;
var grid = [];
var gridItemW;
var imgW;
var imgH;

function preload() {
	img = loadImage('../../images/79526.jpg');
}

function convertImage() {
	imgW = parseInt(img.width);
	imgH = parseInt(img.height);

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
}

function drawImage() {
	push();
	noStroke();
	translate(State.imageX, State.imageY);

	for (var y = 0; y < State.gridRows; y++) {
		for (var x = 0; x < State.gridCols; x++) {
			fill(palette[State.palette][2]);

			var size = map(grid[y][x], 0, 255, 1, State.maxSize);

			push();
			translate(x * gridItemW * State.imageScalar, y * gridItemW * State.imageScalar);
			rect(0, 0, size, size);
			pop();
		}
	}

	pop();

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
