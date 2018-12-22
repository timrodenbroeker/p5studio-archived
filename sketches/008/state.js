var State = {
	// DATA
	text: 'PROCESSING COMMUNITY DAYS 2019',

	// TYPOGRAPHY
	fontSize: 200,
	lineHeight: 0.9,
	textPosition: -20,
	font: 'Fjalla',

	// META INFOS
	metaInfosX: 10,
	metaInfosY: 742,

	// VISUAL
	artworkAmount: 100,
	artworkPhase: 378,
	artworkRotation: 0,
	artworkMargin: 1.14,
	artworkLineW: 18,
	artworkLineH: 18,

	// Colors
	palette: 2,
	visualX: 293,
	visualY: 571,

	download: function() {
		save('out' + imgCounter + '.jpg');
		imgCounter += 1;
	},
};

var inp,
	buttonPaletteNext,
	buttonPalettePrev,
	cSelectX = 1,
	showBranding = true,
	a = 1,
	fontFjalla,
	fontPoppinsBold,
	fontPoppinsLight,
	visualPosY = 810 / 2,
	posterW = 586,
	posterH = 810;

var imgCounter = 0;
