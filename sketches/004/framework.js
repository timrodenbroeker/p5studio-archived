var bg = '#D05238';
var fg = '#111111';
var font;

function setupSketch() {
	font = loadFont('assets/Roboto-Black.ttf');
	createCanvas(586, 810);
	rectMode(CORNER);
}

function branding() {
	noStroke();
	fill(fg);
	textFont(font);
	textSize(12);
	textAlign(LEFT, TOP);

	var step = width / 4;
	push();
	translate(6, 6);
	text('Programming Posters', 0, 0, step, 30);
	text('A research on Generative Design', step, 0);
	text('by Tim Rodenbröker', step * 2, 0);
	text('shi', step * 3, 0);
	pop();
}
