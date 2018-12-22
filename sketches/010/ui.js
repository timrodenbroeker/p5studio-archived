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
 Artwork
   =========================================
   */

	// gui.addFolder('Artwork');
	// gui.add(sketch, 'artworkAmount', 30, 200, 1);
	// gui.add(sketch, 'artworkPhase', 0, posterH, 1);
	// gui.add(sketch, 'artworkRotation', 0, posterH, 1);
	// gui.add(sketch, 'artworkMargin', 0, 4, 0.01);
	// gui.add(sketch, 'artworkLineH', 1, 30, 0.01);

	/*
 =========================================
 Image
   =========================================
   */

	gui.addFolder('Image');
	var imageController = gui.add(sketch, 'image', allImages);

	imageController.onChange(function(value) {
		newImage = value;
	});

	var gridImageScalarController = gui.add(sketch, 'imageScalar', 0.1, 7, 0.01);
	// gui.add(sketch, 'imageX', -posterW, posterW, 1);
	// gui.add(sketch, 'imageY', -posterH, posterH, 1);
	var gridMaxSizeController = gui.add(sketch, 'maxSize', 0, 20, 1);
	var gridColController = gui.add(sketch, 'gridCols', 2, 200, 1);
	var gridRowController = gui.add(sketch, 'gridRows', 2, 150, 1);

	gridMaxSizeController.onChange(function(value) {
		convertImage();
	});

	gridImageScalarController.onChange(function(value) {
		convertImage();
	});

	gridColController.onChange(function(value) {
		convertImage();
	});

	gridColController.onFinishChange(function(value) {});

	gridRowController.onChange(function(value) {
		convertImage();
	});

	gridRowController.onFinishChange(function(value) {});

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
