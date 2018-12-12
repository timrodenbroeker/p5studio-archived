var bg = '#D05238';
var fg = '#111111';
var cols, rows, itemW, itemH;
var img;

function setup() {
	img = loadImage('118553.jpg');
	createCanvas(586, 810);
	rectMode(CENTER);
	cols = 20;
	rows = 20;
	itemW = width / cols;
	itemH = height / rows;
}

function draw() {
	background(bg);
	fill(fg);
	noStroke();

	push();

	translate(itemW / 2, itemH / 2);

	for (var x = 0; x < cols; x++) {
		for (var y = 0; y < rows; y++) {
			var a = img.get(x, y);
			console.log(a);

			push();
			translate(itemW * x, itemH * y);
			rect(0, 0, 10, 10);
			pop();
		}
	}

	pop();
}
