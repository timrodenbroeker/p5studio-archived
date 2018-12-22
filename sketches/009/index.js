var imageOffsetX = 0,
	imageOffsetY = 0;

var rects = [];

function setup() {
	fontFjalla = loadFont('../../fonts/Cormorant-Regular.ttf');
	fontPoppinsBold = loadFont('../../fonts/Poppins-Bold.ttf');
	fontPoppinsLight = loadFont('../../fonts/Poppins-Light.ttf');
	createCanvas(586, 810);
	rectMode(CENTER);

	for (var i = 0; i < 100; i++) {
		rects.push({
			x: random(posterW),
			y: random(posterH),
			w: random(5),
			h: random(5),
		});
	}
	convertImage();
}

function draw() {
	background(palette[State.palette][0]);

	rectMode(CORNER);

	fill(palette[State.palette][1]);
	noStroke();

	// drawVisual();
	drawImage();

	if (showBranding) {
		branding();
		metaInfos();
	}

	fill(palette[State.palette][0]);
	for (var i = 0; i < rects.length; i++) {
		rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
	}
}
