var imageFilenames = {};
var fontFilenames = {};

// The busy-boolean is used to show a loading message while loading and converting
var busy = true;

// This variable holds the current image
var sourceImage;

// The canvas (PGraphics-element) that holds the manipulated image
var manipulatedImage;

var font, metaFont;

function preload() {
  imageFilenames = loadJSON("../../data/images.json");
  fontFilenames = loadJSON("../../data/fonts.json");

  sourceImage = loadImage("../../images/30.jpg");

  font = loadFont("../../fonts/Cormorant-Regular.ttf");
  metaFont = loadFont("../../fonts/Poppins-Bold.ttf");
}
