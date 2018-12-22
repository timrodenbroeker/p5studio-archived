function setup() {
	setupUI();
	font1 = loadFont('../../fonts/FjallaOne-Regular.ttf');
	font2 = loadFont('../../fonts/Poppins-Bold.ttf');
	createCanvas(586, 810);
	rectMode(CENTER);
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
		metaInfos();
	}
}
