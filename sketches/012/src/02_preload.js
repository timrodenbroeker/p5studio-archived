var imageFilenames = {};

function preload() {
	imageFilenames = loadJSON('../../data/images.json');

	img = loadImage('../../images/43.jpg');
	fontFjalla = loadFont('../../fonts/Cormorant-Regular.ttf');
	fontPoppinsBold = loadFont('../../fonts/Poppins-Bold.ttf');
	fontPoppinsLight = loadFont('../../fonts/Poppins-Light.ttf');
}
