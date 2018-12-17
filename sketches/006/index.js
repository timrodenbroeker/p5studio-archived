function setup() {
	setupUI();
	font1 = loadFont('../../fonts/smm.otf');
	createCanvas(586, 810);
	rectMode(CENTER);
	textFont(font1);
}

function draw() {
	txtInput = inp.value();
	fontSize = sliderFontSize.value();

	background(palette[cSelectX][0]);

	rectMode(CORNER);

	fill(palette[cSelectX][1]);
	noStroke();

	drawVisual();

	if (showBranding) {
		branding();
	}
}
