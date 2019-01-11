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
  sourceImage = loadImage("../../assets/images/71.jpg");

  font = loadFont("../../assets/fonts/Morganite-Black.ttf");
  metaFont = loadFont("../../assets/fonts/Poppins-Bold.ttf");
  loadFontFiles();
}

var fontOptionsMarkup;

function loadFontFiles() {
  var markupArray = [];
  fetch("../../assets/fonts.json")
    .then(response => response.json())
    .then(json => {
      for (var i = 0; i < json.length; i++) {
        var filename = json[i];

        markupArray.push("<option>" + filename + "</option>");
      }
      fontOptionsMarkup = markupArray.join("");
    });
}
