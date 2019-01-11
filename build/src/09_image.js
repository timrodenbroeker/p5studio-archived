/*
 =========================================
Fetch image
   =========================================
   */

// Get a new source image
function getNewSourceImage(value) {
  busy = true;
  sourceImage = loadImage("../../assets/images/" + value, function() {
    console.log(value + " loaded");

    manipulateImage();
  });
}

/*
 =========================================
Image manipulation algorithm
----------------------------

   =========================================
   */

function manipulateImage() {
  // 1.
  sourceImage.resize(200, 0);

  // 2.
  var srcImgW = sourceImage.width;
  var srcImgH = sourceImage.height;

  // 3.
  var ratio = srcImgH / srcImgW;

  // 4. Get width of the rasterized image from UI
  var mImgW = parseInt(State.width);

  // Calculate the height of it with the ratio
  var mImgH = parseInt(State.width * ratio);

  var scaling = mImgW / srcImgW;

  // Calculate the number of gridcolumns
  var gridItemW = mImgW / State.gridCols;

  // Calculate the number of gridrows
  var gridRows = State.gridCols * ratio;

  // Create PGraphics
  manipulatedImage = createGraphics(mImgW, mImgH);

  // Fill and stroke
  manipulatedImage.noStroke();
  manipulatedImage.fill(State.Colors.image);

  // BUG!
  // The loop draws only a grid of 60 tiles instead of 180

  var counter = 0;

  // Get the brightness-min- and max-values for contrast optimization

  var briMin = 0,
    briMax = 255;

  for (var x = 0; x < mImgW; x += gridItemW) {
    for (var y = 0; y < mImgH; y += gridItemW) {
      // get the right pixel
      var thisPixel = sourceImage.get(
        parseInt(x / scaling),
        parseInt(y / scaling)
      );

      var brightn = brightness(thisPixel);
    }
  }

  // DRAW IT!!!

  for (var x = 0; x < mImgW; x += gridItemW) {
    counter++;

    for (var y = 0; y < mImgH; y += gridItemW) {
      // get the right pixel
      var thisPixel = sourceImage.get(
        parseInt(x / scaling),
        parseInt(y / scaling)
      );

      var brightn = brightness(thisPixel);

      // calculate the size of the rectangle
      var size = map(brightn, 100, 0, 0, State.maxSize);

      manipulatedImage.push();
      manipulatedImage.translate(x, y);
      manipulatedImage.rect(0, 0, size, size);
      manipulatedImage.pop();
    }
  }

  busy = false;
}
