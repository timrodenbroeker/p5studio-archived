var sliderFontSize,
	sliderFontSizeLabel,
	sliderLineHeight,
	sliderLineHeightLabel,
	sliderPhase,
	sliderPhaseLabel,
	sliderPos,
	sliderPosLabel,
	sliderMetaPosX,
	sliderMetaPosXLabel,
	sliderMetaPosY,
	sliderMetaPosYLabel,
	sliderTypoPosY,
	sliderTypoPosYLabel;

var posYStep = 25;

function setupUI() {
	var posY = 20;

	/*
 =========================================
   Slider FontSize
   =========================================
   */

	sliderFontSize = createSlider(20, 255, 100);
	sliderFontSize.position(20, posY);
	sliderFontSizeLabel = createDiv('font size');
	sliderFontSizeLabel.position(200, posY);

	posY += posYStep;

	/*
 =========================================
   slider LineHeight
   =========================================
   */

	sliderLineHeight = createSlider(0, 1.2, 1, 0.01);
	sliderLineHeight.position(20, posY);
	sliderLineHeightLabel = createDiv('line-height');
	sliderLineHeightLabel.position(200, posY);

	posY += posYStep;

	/*
 =========================================
   sliderTypePos
   =========================================
   */

	sliderTypePos = createSlider(0, posterH, 0);
	sliderTypePos.position(20, posY);
	sliderTypePosLabel = createDiv('position');
	sliderTypePosLabel.position(200, posY);

	posY += posYStep * 2;

	/*
 =========================================
   slider LineHeight
   =========================================
   */

	sliderPhase = createSlider(0, 2000, 100);
	sliderPhase.position(20, posY);

	posY += posYStep;

	/*
 =========================================
   slider LineHeight
   =========================================
   */

	sliderPos = createSlider(0, 810, 810 / 2);
	sliderPos.position(20, posY);

	posY += posYStep;

	/*
 =========================================
   slider LineHeight
   =========================================
   */

	sliderMetaPosX = createSlider(0, 586, 586 / 2);
	sliderMetaPosX.position(20, posY);

	posY += posYStep;

	/*
 =========================================
   slider LineHeight
   =========================================
   */

	sliderMetaPosY = createSlider(0, 810, 810 / 2);
	sliderMetaPosY.position(20, posY);

	posY += posYStep;

	/*
 =========================================
   slider LineHeight
   =========================================
   */

	inp = createInput('');
	inp.input(myInputEvent);
	inp.position(20, posY);

	posY += posYStep;

	/*
 =========================================
   slider LineHeight
   =========================================
   */

	buttonPaletteNext = createButton('Prev', 'sss');
	buttonPaletteNext.position(20, posY);

	buttonPalettePrev = createButton('Next');
	buttonPalettePrev.position(90, posY);
}

function myInputEvent() {
	console.log('you are typing: ', this.value());
}
