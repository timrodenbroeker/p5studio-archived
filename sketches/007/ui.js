window.onload = function() {
	var sketch = State;
	var gui = new dat.GUI();
	gui.domElement.id = 'interface';

	gui.addFolder('Typography');
	gui.add(sketch, 'fontSize', 10, 400, 1);
	gui.add(sketch, 'lineHeight', 0.3, 2, 0.01);
	gui.add(sketch, 'textPosition', -100, posterH, 1);
	gui.add(sketch, 'font', { Fjalla1: 'Fjalla', Poppins: 'Poppins' });
	gui.addFolder('MetaInfos');
	gui.add(sketch, 'metaInfosX', 0, posterW, 1);
	gui.add(sketch, 'metaInfosY', 0, posterH, 1);
	gui.addFolder('Artwork');
	gui.add(sketch, 'artworkAmount', 30, 200, 1);
	gui.add(sketch, 'artworkPhase', 0, posterH, 1);
	gui.add(sketch, 'artworkRotation', 0, posterH, 1);
	gui.add(sketch, 'artworkMargin', 0, 4, 0.01);
	gui.add(sketch, 'artworkLineH', 1, 30, 0.01);
	gui.addFolder('Colors');
	gui.add(sketch, 'palette', 0, 3, 1);
};
