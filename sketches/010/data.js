/*
 =========================================
 STATE
   =========================================
   */

var State = {
	// DATA
	text: 'ART IN THE AGE OF AUTOMATION',

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
	visualX: 293,
	visualY: 571,

	// IMAGE
	image: 'img1',
	imageX: 10,
	imageY: 10,
	imageScalar: 4,
	gridCols: 100,
	gridRows: 100,
	maxSize: 10,

	// Colors
	Colors: {
		background: '#f1f1f1',
		text: '#2103A8',
		image: '#2103A8',
	},

	download: function() {
		save('out' + imgCounter + '.jpg');
		imgCounter += 1;
	},
};

/*
 =========================================
 OTHER VARIABLES
   =========================================
   */

var inp,
	showBranding = true,
	visualPosY = 810 / 2,
	posterW = 586,
	posterH = 810;
