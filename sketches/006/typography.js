function branding() {
	textFont(font1);
	output = txt + txtInput;
	textAlign(RIGHT, TOP);
	rectMode(CORNER);

	textSize(fontSize);

	lineHeight = sliderLineHeight.value();

	fill(palette[cSelectX][1]);
	push();
	translate(0, sliderTypePos.value());

	var charPosX = 0;
	var charPosY = 0;

	for (var i = 0; i < output.length; i++) {
		var charW = textWidth(output[i]);
		if (charPosX > width - 20) {
			charPosX = 0;
			charPosY += fontSize * lineHeight;
		}
		charPosX += charW;
		text(output[i], charPosX, charPosY);
	}

	pop();
}

function metaInfos() {
	textFont(font2);
	push();
	textAlign(LEFT, TOP);
	fill(palette[cSelectX][1]);
	textSize(15);
	text('Processing Community Days', sliderMetaPosX.value(), sliderMetaPosY.value());
	text('April 17th - 21th 2019', sliderMetaPosX.value(), sliderMetaPosY.value() + 16);
	text('Paderborn, Germany', sliderMetaPosX.value(), sliderMetaPosY.value() + 32);

	pop();
}
