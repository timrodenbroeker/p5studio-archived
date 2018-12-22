function setup() {
	fontFjalla = loadFont('../../fonts/FjallaOne-Regular.ttf');
	fontPoppinsBold = loadFont('../../fonts/Poppins-Bold.ttf');
	fontPoppinsLight = loadFont('../../fonts/Poppins-Light.ttf');
	createCanvas(586, 810);
	rectMode(CENTER);
}

function draw() {
	background(palette[State.palette][0]);

	rectMode(CORNER);

	fill(palette[State.palette][1]);
	noStroke();

	drawVisual();

	if (showBranding) {
		branding();
		metaInfos();
	}
}
