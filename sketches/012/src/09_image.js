/*
 =========================================
 DRAW IMAGE
   =========================================
   */

function drawImage() {
	poster.push();
	poster.noStroke();

	poster.translate(State.imageX, State.imageY);

	poster.image(pg, 0, 0);

	poster.pop();

	// image(img, 200, 200);
}
