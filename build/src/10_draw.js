/*
 =========================================
 DRAW
   =========================================
   */

var posterSizeAdjust = false;
var posterSizeAdjustWidth = State.width;

function draw() {
  background("#000000");

  poster.background(State.Colors.background);

  poster.rectMode(CORNER);

  poster.noStroke();

  if (busy) {
    textAlign(CENTER, CENTER);
    fill("#ffffff");
    push();
    translate(width / 2, height / 2);
    textSize(33);
    text("loading image...", 0, 0);
    pop();
  } else {
    // Display the manipulated image

    poster.push();
    poster.translate(State.imageX, State.imageY);
    poster.image(manipulatedImage, 0, 0);
    poster.pop();

    // If imagesize is adjusted
    if (posterSizeAdjust) {
      poster.push();
      poster.translate(State.imageX, State.imageY);
      poster.noFill();
      poster.strokeWeight(6);
      poster.stroke("#E25B46");
      poster.rectMode(CORNER);
      poster.rect(0, 0, posterSizeAdjustWidth, posterSizeAdjustWidth);
      poster.pop();
    }

    // Display the sourceImage image
    // poster.image(sourceImage, 250, 0);

    headline();
    // metaInfos();
    if (State.selectedLayer == "HEADLINE") {
      mouseDragHeadline();
    } else if (State.selectedLayer == "TEXT") {
      mouseDragText();
    } else if (State.selectedLayer == "IMAGE") {
      mouseDragImage();
    }

    dust();

    // Draw the poster on the square
    push();
    translate(width / 2, height / 2);
    image(poster, 0, 0);
    pop();
  }
}
