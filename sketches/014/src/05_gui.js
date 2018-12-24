/*
 =========================================
 DAT GUI 
 The interface 
   =========================================
   */

function buildUI() {
	var sketch = State;
	var gui = new dat.GUI({ width: 400 });
	gui.domElement.id = 'gui';

	/*
 =========================================
 Data
   =========================================
   */

	gui.addFolder('Data');
	gui.add(sketch, 'text');

	/*
 =========================================
 Typography
   =========================================
   */

	gui.addFolder('Typography');

	var fontController = gui.add(sketch, 'font', fontFilenames);

	fontController.onChange(function(value) {
		font = loadFont('../../fonts/' + value);
	});

	gui.add(sketch, 'fontSize', 10, 400, 1);
	gui.add(sketch, 'lineHeight', 0.3, 2, 0.01);
	gui.add(sketch, 'textPosition', -100, posterH, 1);

	/*
 =========================================
 Meta Infos
   =========================================
   */

	gui.addFolder('MetaInfos');
	gui.add(sketch, 'metaInfosX', 0, posterW, 1);
	gui.add(sketch, 'metaInfosY', 0, posterH, 1);

	/*
 =========================================
 Image
   =========================================
   */

	gui.addFolder('Image');
	var imageController = gui.add(sketch, 'image', imageFilenames);

	imageController.onFinishChange(function(value) {
		getNewSourceImage(value);
	});

	var imageWidthController = gui.add(sketch, 'width', 100, 1000, 1);
	var gridMaxSizeController = gui.add(sketch, 'maxSize', 0, 20, 0.1);
	var gridColController = gui.add(sketch, 'gridCols', 2, 180, 1);

	gridMaxSizeController.onFinishChange(function(value) {
		manipulateImage();
	});

	imageWidthController.onFinishChange(function(value) {
		manipulateImage();
	});

	gridColController.onFinishChange(function(value) {
		manipulateImage();
	});

	/*
 =========================================
 Colors
   =========================================
   */

	gui.addFolder('Colors');
	gui.add(sketch.Colors, 'background', { marine: '#2103A8', white: '#f1f1f1' });
	gui.add(sketch.Colors, 'text', { marine: '#2103A8', white: '#f1f1f1' });
	gui.add(sketch.Colors, 'image', { marine: '#2103A8', white: '#f1f1f1' });

	/*
 =========================================
	Export
   =========================================
   */

	gui.addFolder('save');
	gui.add(sketch, 'download');
	gui.remember(sketch);
}
