var bg = '#D05238';
var fg = '#111111';
var cols, rows, itemW, itemH;
var img;

function setup() {
	img = loadImage('118553.jpg');
	createCanvas(586, 810);
	rectMode(CENTER);
	cols = 100;
	rows = 100;
	itemW = width / cols;
	itemH = height / cols;

	// frameRate(1);
}

function draw() {
	theloop();
}

function theloop() {
	background(bg);
	fill(fg);
	noStroke();

	push();
	console.log('a');

	translate(itemW / 2, itemH / 2);

	var scalingX = width / img.width;
	var scalingY = height / img.height;

	for (var x = 0; x < cols; x++) {
		for (var y = 0; y < rows; y++) {
			var a = img.get(x + mouseX * scalingX, y + mouseY * scalingY);

			var briInverted = 255 - bri;

			var size = map(bri, 0, 255, 7, 0);

			push();
			translate(itemW * x, itemH * y);
			rect(0, 0, size, size);
			pop();
		}
	}

	pop();
}
