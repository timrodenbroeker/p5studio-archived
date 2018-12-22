/*
 =========================================
 Rasterize image
   =========================================
   */

function rasterize(img, pg) {
	var imgW = parseInt(img.width);

	var imgH = parseInt(img.height);

	var ratio = imgW / imgH;

	pg = createGraphics(State.gridCols * gridItemW * State.imageScalar, State.gridRows * gridItemW * State.imageScalar);
	for (var y = 0; y < gridRows; y++) {
		for (var x = 0; x < State.gridCols; x++) {
			pg.fill(State.Colors.image);
			pg.noStroke();
			var size = map(grid[y][x], 0, 255, 1, State.maxSize);

			pg.push();
			pg.translate(x * gridItemW * State.imageScalar, y * gridItemW * State.imageScalar);
			pg.rect(0, 0, size, size);
			pg.pop();
		}
	}

	return pg;
}
