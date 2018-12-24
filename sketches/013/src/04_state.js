/*
 =========================================
 STATE

 This object stores the values that are 
 manipulated through the GUI

   =========================================
   */

var State = {
	// DATA
	text: 'ART IN THE AGE OF AUTOMATION',

	// TYPOGRAPHY
	fontSize: 200,
	lineHeight: 0.9,
	textPosition: -20,
	font: 'Cormorant-Italic.ttf',

	// META INFOS
	metaInfosX: 10,
	metaInfosY: 742,

	// IMAGE
	image: '9.jpg',
	imageX: 10,
	imageY: 10,
	width: 700,
	gridCols: 150,
	maxSize: 4,

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
