var cols, rows, itemW, itemH;
var img;

var showBranding = false;

function setup() {
  setupSketch();
  img = loadImage("assets/118553.jpg");

  cols = 80;
  rows = 80;
  itemW = width / cols;
  itemH = height / cols;

  // frameRate(1);
}

function draw() {
  run();
}

function run() {
  rectMode(CENTER);
  background(cBlue);
  fill(cWhite);
  noStroke();

  push();

  translate(itemW / 2, itemH / 2);

  var scalingX = 3;
  var scalingY = 3;

  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
      var a = img.get(x * scalingX, y * scalingY);
      var bri = brightness(a);
      var briInverted = 255 - bri;

      var size = map(bri, 0, 255, 0, 16);

      push();
      translate(itemW * x, itemH * y);
      rect(0, 0, size, size);
      pop();
    }
  }

  pop();

  if (showBranding) {
    branding();
  }
}

function mouseReleased() {
  showBranding = !showBranding;
}
