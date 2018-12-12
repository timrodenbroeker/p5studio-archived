var bg = '#D05238';
var fg = '#111111';
var mx, my;

function setup() {
	createCanvas(586, 810);
	rectMode(CENTER);
}

function draw() {
	background(bg);
	fill(fg);
	noStroke();

	if (mouseX < width) {
		mx = map(mouseX, 0, width, 0, 8000);
	}

	for (var x = 0; x < mx / 20; x++) {
		push();
		translate(width / 2, height / 2);
		rotate(radians(x * 20));
		rotate(radians(x / 2 + x));
		rect(x * 0.9, 0, 20, 2 + x * 0.2);
		pop();
	}
}
