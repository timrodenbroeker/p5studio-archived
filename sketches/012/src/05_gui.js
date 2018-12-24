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
	gui.add(sketch, 'fontSize', 10, 400, 1);
	gui.add(sketch, 'lineHeight', 0.3, 2, 0.01);
	gui.add(sketch, 'textPosition', -100, posterH, 1);
	gui.add(sketch, 'font', { Fjalla1: 'Fjalla', Poppins: 'Poppins' });

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

	imageController.onChange(function(value) {
		getNewSourceImage(value);
	});

	var gridImageScalarController = gui.add(sketch, 'imageScalar', 0.5, 7, 0.01);
	// gui.add(sketch, 'imageX', -posterW, posterW, 1);
	// gui.add(sketch, 'imageY', -posterH, posterH, 1);
	var gridMaxSizeController = gui.add(sketch, 'maxSize', 0, 20, 0.1);
	var gridColController = gui.add(sketch, 'gridCols', 2, 180, 1);

	gridMaxSizeController.onChange(function(value) {});

	gridMaxSizeController.onFinishChange(function(value) {
		manipulateImage();
	});

	gridImageScalarController.onChange(function(value) {});

	gridColController.onChange(function(value) {});

	gridColController.onFinishChange(function(value) {
		manipulateImage();
	});

	gridImageScalarController.onFinishChange(function(value) {
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
