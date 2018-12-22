function branding() {
	if (State.font == 'Fjalla') {
		textFont(fontFjalla);
	} else {
		textFont(fontPoppinsLight);
	}

	textAlign(RIGHT, TOP);
	rectMode(CORNER);
	textSize(State.fontSize);

	fill(palette[State.palette][1]);
	push();
	translate(0, State.textPosition);

	var charPosX = 0;
	var charPosY = 0;

	for (var i = 0; i < State.text.length; i++) {
		var charW = textWidth(State.text[i]);
		if (charPosX > posterW - 20) {
			charPosX = 0;
			charPosY += State.fontSize * State.lineHeight;
		}
		charPosX += charW;
		text(State.text[i], charPosX, charPosY);
	}

	pop();
}

function metaInfos() {
	textFont(fontPoppinsBold);
	textAlign(LEFT, TOP);
	fill(palette[State.palette][1]);
	textSize(15);
	push();
	translate(State.metaInfosX, State.metaInfosY);

	text('Processing Community Days', 0, 0);
	text('April 17th - 21th 2019', 0, 0 + 16);
	text('Paderborn, Germany', 0, 0 + 32);
	pop();
}
