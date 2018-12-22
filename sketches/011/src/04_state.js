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

	// IMAGE
	image: '43.jpg',
	imageX: 10,
	imageY: 10,
	imageScalar: 4,
	gridCols: 100,
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
