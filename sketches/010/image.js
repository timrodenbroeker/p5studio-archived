var allImages = [];

var gotChanges = false;

var pg;

/*
 =========================================
 Draw the values from the grid-array to the pg-element
   =========================================
   */

function redrawImage() {
	pg = createGraphics(State.gridCols * gridItemW * State.imageScalar, State.gridRows * gridItemW * State.imageScalar);
	for (var y = 0; y < State.gridRows; y++) {
		for (var x = 0; x < State.gridCols; x++) {
			pg.fill(State.Colors.image);
			pg.noStroke();
			var size = map(grid[y][x], 0, 255, 1, State.maxSize);

			pg.push();
			pg.translate(x * gridItemW * State.imageScalar, y * gridItemW * State.imageScalar);
			pg.rect(0, 0, size, size);
			pg.pop();
		}
	}
}

// The current Image
var img;

$.getJSON('../../data/images.json', function(json) {
	allImages = json;
	console.log(allImages);
	started = true;
	buildUI();
});

var ImageOffsetX = 0,
	ImageOffsetY = 0,
	dragging = false,
	rollover = false;

var grid = [];
var gridItemW;

/*
 =========================================
 CONVERT IMAGE
   =========================================
   */

function convertImage() {
	// console.log('loaded', img);
	var imgW = parseInt(img.width);

	var imgH = parseInt(img.height);

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
	push();
	noStroke();

	translate(State.imageX, State.imageY);

	image(pg, 0, 0);

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

	// image(img, 200, 200);
}
