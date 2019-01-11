/*
 =========================================
 OTHER VARIABLES
   =========================================
   */
var inp,
    posterW = 586,
    posterH = 810;
var currentImage, newImage;
var imageOffsetX = 0,
    imageOffsetY = 0;
var started = false;
var imageIsLoaded = false;
var poster;
var imgCounter = 0;
var allImages = [];
var gotChanges = false; // The PGraphics-element i'll draw on the poster

var pg;
var mouseOffsetX = 0,
    mouseOffsetY = 0,
    dragging = false,
    rollover = false;
var grid = [];
var gridItemW; // Automated gridRows

var gridRows;
var img;
var imageFilenames = {};
var fontFilenames = {}; // The busy-boolean is used to show a loading message while loading and converting

var busy = true; // This variable holds the current image

var sourceImage; // The canvas (PGraphics-element) that holds the manipulated image

var manipulatedImage;
var font, metaFont;

function preload() {
  sourceImage = loadImage("./assets/images/71.jpg");
  font = loadFont("./assets/fonts/Morganite-Black.ttf");
  metaFont = loadFont("./assets/fonts/Poppins-Bold.ttf");
  loadFontFiles();
}

var fontOptionsMarkup;

function loadFontFiles() {
  var markupArray = [];
  fetch("./assets/fonts.json").then(response => response.json()).then(json => {
    for (var i = 0; i < json.length; i++) {
      var filename = json[i];
      markupArray.push("<option>" + filename + "</option>");
    }

    fontOptionsMarkup = markupArray.join("");
  });
}
/*
 =========================================
 SETUP
   =========================================
   */


function setup() {
  imageMode(CENTER);
  rectMode(CENTER); // Create canvas

  var canvas = createCanvas(900, 900);
  canvas.parent("sketch"); // The poster is a PGraphics-element

  poster = createGraphics(586, 810);
  manipulateImage();
  busy = false; // gui.js

  buildUI(); // dust.js

  generateDust();
} // Function to assign all values from the file-arrays to the gui-select-elements
// function to(name, seedGroup, seed, number) {
// 	this.name = name;
// 	this.seedGroup = seedGroup;
// 	this.seed = seed;
// 	}
// 	var countries = [
// 	  new to("Austria", 3, 0),
// 	  new to("Belgium", 1, 1),
// 	  new to("Bosnia & Herzogovinia", 2, 2)
// 	];
// 	var options = '';
// 	for (var i = 0; i < countries.length; i++) {
// 	   options += '<option value="'+JSON.stringify(countries[i])+'">'+countries[i].name+'</option>';
// 	}
// 	$('select').html(options);

/*
 =========================================
 STATE

 This object stores the values that are 
 manipulated through the GUI

   =========================================
   */


var State = {
  selectedLayer: "IMAGE",
  headline: {
    text: "DESIGN IN \nTHE AGE OF \nAUTOMATION",
    fontSize: 225,
    lineHeight: 0.742,
    textX: 8.75,
    textY: 7.5
  },
  text: {
    text: "Some multi-\nline text here",
    fontSize: 16,
    lineHeight: 1,
    textX: 437.5,
    textY: 763.75
  },
  metaInfosX: 10,
  metaInfosY: 742,
  image: "9.jpg",
  imageX: -23.75,
  imageY: -151.25,
  width: 1122,
  gridCols: 200,
  maxSize: 7.3,
  Colors: {
    background: "#f1f1f1",
    text: "#ED0B0A",
    image: "#2103A8"
  }
};
/*
 =========================================
 Keyboard
   =========================================
   */

var imgCounter = 0;

function exportImage() {
  save("out" + imgCounter + ".jpg");
  imgCounter += 1;
}

document.onkeyup = function (e) {
  // SAVE IMAGE WITH S
  if (e.keyCode == 192) {
    exportImage();
  }

  if (e.keyCode == 27) {
    document.getElementById("overlay").classList.remove("visible");
  }
};
/*
 =========================================
 Mouse
   =========================================
   */


function mousePressed() {
  // Did I click on the rectangle?
  if (rollover) {
    dragging = true; // If so, keep track of relative location of click to corner of rectangle
  }

  if (State.selectedLayer == "HEADLINE") {
    mouseOffsetX = State.headline.textX - mouseX;
    mouseOffsetY = State.headline.textY - mouseY;
  } else if (State.selectedLayer == "TEXT") {
    mouseOffsetX = State.text.textX - mouseX;
    mouseOffsetY = State.text.textY - mouseY;
  } else if (State.selectedLayer == "IMAGE") {
    mouseOffsetX = State.imageX - mouseX;
    mouseOffsetY = State.imageY - mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}

function mouseDragHeadline() {
  // Is mouse over object
  if (mouseX > 0 && mouseX < 900 && mouseY > 0 && mouseY < 900) {
    rollover = true;
  } else {
    rollover = false;
  }

  if (dragging) {
    State.headline.textX = mouseX + mouseOffsetX;
    State.headline.textY = mouseY + mouseOffsetY;
  }
}

function mouseDragText() {
  // Is mouse over object
  if (mouseX > 0 && mouseX < 900 && mouseY > 0 && mouseY < 900) {
    rollover = true;
  } else {
    rollover = false;
  }

  if (dragging) {
    State.text.textX = mouseX + mouseOffsetX;
    State.text.textY = mouseY + mouseOffsetY;
  }
}

function mouseDragImage() {
  // Is mouse over object
  if (mouseX > 0 && mouseX < 900 && mouseY > 0 && mouseY < 900) {
    rollover = true;
  } else {
    rollover = false;
  }

  if (dragging) {
    State.imageX = mouseX + mouseOffsetX;
    State.imageY = mouseY + mouseOffsetY;
  }
}
/*
 =========================================
 Typography
   =========================================
   */


function headline() {
  poster.textAlign(LEFT, TOP);
  poster.rectMode(CORNER); // Headline

  poster.textFont(font);
  poster.textSize(State.headline.fontSize);
  poster.textLeading(State.headline.lineHeight * State.headline.fontSize);
  poster.fill(State.Colors.text);
  poster.push();
  poster.translate(State.headline.textX, State.headline.textY);
  poster.text(State.headline.text, 0, 0);
  poster.pop(); // Text

  poster.textFont(metaFont);
  poster.textSize(State.text.fontSize);
  poster.textLeading(State.text.lineHeight * State.text.fontSize);
  poster.fill(State.Colors.text);
  poster.push();
  poster.translate(State.text.textX, State.text.textY);
  poster.text(State.text.text, 0, 0);
  poster.pop();
}
/*
 =========================================
 MetaInfos
   =========================================
   */
// function type2() {
//   poster.textFont(metaFont);
//   poster.textAlign(CENTER, TOP);
//   poster.fill(State.Colors.image);
//   poster.textSize(11);
//   poster.push();
//   poster.translate(State.metaInfosX, State.metaInfosY);
//   // poster.text('Programming Posters', 0, 0);
//   // poster.text('April 17th - 21th 2019', 0, 0 + 16);
//   poster.text("www.timrodenbroeker.de", posterW / 2, 0 + 32);
//   poster.pop();
// }

/*
 =========================================
Fetch image
   =========================================
   */
// Get a new source image


function getNewSourceImage(value) {
  busy = true;
  sourceImage = loadImage("./assets/images/" + value, function () {
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
  sourceImage.resize(200, 0); // 2.

  var srcImgW = sourceImage.width;
  var srcImgH = sourceImage.height; // 3.

  var ratio = srcImgH / srcImgW; // 4. Get width of the rasterized image from UI

  var mImgW = parseInt(State.width); // Calculate the height of it with the ratio

  var mImgH = parseInt(State.width * ratio);
  var scaling = mImgW / srcImgW; // Calculate the number of gridcolumns

  var gridItemW = mImgW / State.gridCols; // Calculate the number of gridrows

  var gridRows = State.gridCols * ratio; // Create PGraphics

  manipulatedImage = createGraphics(mImgW, mImgH); // Fill and stroke

  manipulatedImage.noStroke();
  manipulatedImage.fill(State.Colors.image); // BUG!
  // The loop draws only a grid of 60 tiles instead of 180

  var counter = 0; // Get the brightness-min- and max-values for contrast optimization

  var briMin = 0,
      briMax = 255;

  for (var x = 0; x < mImgW; x += gridItemW) {
    for (var y = 0; y < mImgH; y += gridItemW) {
      // get the right pixel
      var thisPixel = sourceImage.get(parseInt(x / scaling), parseInt(y / scaling));
      var brightn = brightness(thisPixel);
    }
  } // DRAW IT!!!


  for (var x = 0; x < mImgW; x += gridItemW) {
    counter++;

    for (var y = 0; y < mImgH; y += gridItemW) {
      // get the right pixel
      var thisPixel = sourceImage.get(parseInt(x / scaling), parseInt(y / scaling));
      var brightn = brightness(thisPixel); // calculate the size of the rectangle

      var size = map(brightn, 100, 0, 0, State.maxSize);
      manipulatedImage.push();
      manipulatedImage.translate(x, y);
      manipulatedImage.rect(0, 0, size, size);
      manipulatedImage.pop();
    }
  }

  busy = false;
}
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
    poster.pop(); // If imagesize is adjusted

    if (posterSizeAdjust) {
      poster.push();
      poster.translate(State.imageX, State.imageY);
      poster.noFill();
      poster.strokeWeight(6);
      poster.stroke("#E25B46");
      poster.rectMode(CORNER);
      poster.rect(0, 0, posterSizeAdjustWidth, posterSizeAdjustWidth);
      poster.pop();
    } // Display the sourceImage image
    // poster.image(sourceImage, 250, 0);


    headline(); // metaInfos();

    if (State.selectedLayer == "HEADLINE") {
      mouseDragHeadline();
    } else if (State.selectedLayer == "TEXT") {
      mouseDragText();
    } else if (State.selectedLayer == "IMAGE") {
      mouseDragImage();
    }

    dust(); // Draw the poster on the square

    push();
    translate(width / 2, height / 2);
    image(poster, 0, 0);
    pop();
  }
}
/*
 =========================================
 Generate Dust
   =========================================
   */


var rects = [];

function generateDust() {
  for (var i = 0; i < 100; i++) {
    rects.push({
      x: random(posterW),
      y: random(posterH),
      w: random(2),
      h: random(5)
    });
  }
}
/*
 =========================================
 Display Dust
   =========================================
   */


function dust() {
  poster.fill(State.Colors.background);
  poster.noStroke();

  for (var i = 0; i < rects.length; i++) {
    poster.rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
  }
}

function buildUI() {
  //////////////
  // CREATE TEMPLATE WITH FONT-OPTIONS
  //////////////
  var arrayOfFonts = [];

  for (var property in fontFilenames) {
    if (fontFilenames.hasOwnProperty(property)) {
      arrayOfFonts.push("<option>" + property + "</option>");
    }
  }

  var fontOptionsHtml = arrayOfFonts.join("");
  var markup = `
  <div id="gui">

  <div class="gui-group">

  <h4>LO-FI POSTER MACHINE</h4>

  <p>App by <a target="_blank" href="https://www.timrodenbroeker.de">Tim Rodenbröker</a><br>
  Version 0.1
  </p>
  </div>

    <div class="gui-group">
    
    <h2>Select Layer</h2>
    ${buildLayerRadio()}

    </div>
    <div class="gui-group">
  <h2>Headline</h2>
      
			${buildTextInput("text", "Text", "ART IN THE AGE OF AUTOMATION")}
			${buildSelect("fonts", "Font", fontOptionsMarkup)}
			${buildUISlider("fontsize", "Size", 0, 300, 1, State.headline.fontSize)}
			${buildUISlider("lineheight", "line", 0, 2, 0.001, State.headline.lineHeight)}

    </div>
    
    <div class="gui-group">
    <h2>Text</h2>
        
        ${buildTextInput("texttext", "Text", "Some Text")}
        ${buildUISlider("textfontsize", "Size", 0, 300, 1, State.text.fontSize)}
        ${buildUISlider("textlineheight", "line", 0, 2, 0.001, State.text.lineHeight)}
  
      </div>
      
  

    <div class="gui-group">
    <h2>Colors</h2>
    <div class="gui-wrapper">
      <div class="gui-label">Background</div>
        <div class="gui-input">
          <div class="bgPickr"></div>
        </div>
        <div class="gui-val"></div>
      </div>
      
      <div class="gui-wrapper">
      <div class="gui-label">Text</div>
        <div class="gui-input">
          <div class="txtPickr"></div>
        </div>
        <div class="gui-val"></div>
        </div>
      <div class="gui-wrapper">
      <div class="gui-label">Image</div>
        <div class="gui-input">
          <div class="imgPickr"></div>
        </div>
        <div class="gui-val"></div>
      </div>



		</div>

		<div class="gui-group">
		<h2>Image</h2>
			${buildImageSelectButton()}
			${buildUISlider("imgW", "width", 0, 1400, 1, State.width)}
			${buildUISlider("gridCols", "tiles", 20, 200, 1, State.gridCols)}
      ${buildUISlider("imgMaxS", "tilesize", 0.1, 12, 0.01, State.maxSize)}

		</div>

    <div class="gui-group">
    <h2>Save</h2>

    <div class="gui-wrapper">
      <div class="gui-label">Export</div>
        <div class="gui-input">
         <button onclick="exportImage()">Save JPG</button>
        </div>
        <div class="gui-val"></div>
      </div>


      <div class="gui-wrapper">
      <div class="gui-label">Save</div>
        <div class="gui-input">
         <button onclick="download(State, 'poster.json', 'text/plain')">Save Configuration</button>
        </div>
        <div class="gui-val"></div>
      </div>


    </div>

  </div>
  
	`;
  $("#guiWrapper").html(markup);
  buildImagesOverlay();
  databinding();
  createPickrs();
}

function databinding() {
  /*
  =========================================
  IMAGE SELECTOR
   =========================================
   */
  document.getElementById("imageSelectButton").querySelector("button").onclick = function () {
    ImagesOverlayDataBinding();
    document.getElementById("overlay").classList.add("visible");
  };
  /*
  =========================================
  LAYER SELECTOR
   =========================================
   */


  document.getElementById("layerRadio").querySelector("fieldset").onchange = function () {
    State.selectedLayer = document.querySelector('input[name="Layer"]:checked').value;
    console.log(State.selectedLayer);
  };
  /*
  =========================================
  TYPOGRAPHY
   =========================================
   */
  // HEADLINE
  // Font-size


  document.getElementById("text").querySelector("textarea").oninput = function () {
    // State.text = this.value.toUpperCase();
    State.headline.text = this.value.replace(/\r\n|\r|\n/g, "\n");
  }; // Font


  document.getElementById("fonts").querySelector("select").onchange = function () {
    var newFont = this.options[this.selectedIndex].value;
    font = loadFont("./assets/fonts/" + newFont);
    console.log(newFont);
  }; // Font-size


  document.getElementById("fontsize").querySelector("input").oninput = function () {
    State.headline.fontSize = parseFloat(this.value);
    document.getElementById("fontsize").querySelector(".gui-val").innerHTML = State.headline.fontSize;
  }; // line-height


  document.getElementById("lineheight").querySelector("input").oninput = function () {
    State.headline.lineHeight = parseFloat(this.value);
    document.getElementById("lineheight").querySelector(".gui-val").innerHTML = State.headline.lineHeight;
  }; // TEXT


  document.getElementById("texttext").querySelector("textarea").oninput = function () {
    // State.text = this.value.toUpperCase();
    State.text.text = this.value.replace(/\r\n|\r|\n/g, "\n");
    console.log(State.text.text);
  }; // Font-size


  document.getElementById("textfontsize").querySelector("input").oninput = function () {
    State.text.fontSize = parseFloat(this.value);
    document.getElementById("textfontsize").querySelector(".gui-val").innerHTML = State.text.fontSize;
  }; // line-height


  document.getElementById("textlineheight").querySelector("input").oninput = function () {
    State.text.lineHeight = parseFloat(this.value);
    document.getElementById("textlineheight").querySelector(".gui-val").innerHTML = State.text.lineHeight;
  };
  /*
  =========================================
  IMAGES
   =========================================
   */
  // document.getElementById('images').querySelector('select').onchange = function() {
  // 	var newImage = this.options[this.selectedIndex].value;
  // 	getNewSourceImage(newImage);
  // 	console.log(newImage);
  // };
  // Image width


  document.getElementById("imgW").querySelector("input").oninput = function () {
    posterSizeAdjustWidth = this.value;
    posterSizeAdjust = true;
  };

  document.getElementById("imgW").querySelector("input").onchange = function () {
    State.width = parseInt(this.value);
    document.getElementById("imgW").querySelector(".gui-val").innerHTML = State.width;
    posterSizeAdjust = false;
    manipulateImage();
  };

  document.getElementById("imgMaxS").querySelector("input").onchange = function () {
    State.maxSize = parseFloat(this.value);
    document.getElementById("imgMaxS").querySelector(".gui-val").innerHTML = State.maxSize;
    manipulateImage();
  };

  document.getElementById("gridCols").querySelector("input").onchange = function () {
    State.gridCols = parseFloat(this.value);
    document.getElementById("gridCols").querySelector(".gui-val").innerHTML = State.gridCols;
    manipulateImage();
  }; //A
  // document.getElementById("color-type").onclick = function() {
  //   this.classList.toggle("active");
  //   if (this.classList.contains("active")) {
  //     State.Colors.text = "#2103A8";
  //   } else {
  //     State.Colors.text = "#f1f1f1";
  //   }
  // };
  // document.getElementById("color-background").onclick = function() {
  //   this.classList.toggle("active");
  //   if (this.classList.contains("active")) {
  //     State.Colors.background = "#2103A8";
  //   } else {
  //     State.Colors.background = "#f1f1f1";
  //   }
  // };
  // document.getElementById("color-image").onclick = function() {
  //   this.classList.toggle("active");
  //   if (this.classList.contains("active")) {
  //     State.Colors.image = "#2103A8";
  //   } else {
  //     State.Colors.image = "#f1f1f1";
  //   }
  //   manipulateImage();
  // };

}

function download(content, fileName, contentType) {
  var theData = JSON.stringify(content);
  var a = document.createElement("a");
  var file = new Blob([theData], {
    type: contentType
  });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

function createPickrs() {
  const bgPickr = new Pickr({
    // Selector or element which will be replaced with the actual color-picker.
    // Can be a HTMLElement.
    el: ".bgPickr",
    // Using the 'el' Element as button, won't replace it with the pickr-button.
    // If true, appendToBody will also be automatically true.
    useAsButton: false,
    // Start state. If true 'disabled' will be added to the button's classlist.
    disabled: false,
    // If set to false it would directly apply the selected color on the button and preview.
    comparison: true,
    // Default color
    default: State.Colors.background,
    // Default color representation.
    // Valid options are `HEX`, `RGBA`, `HSVA`, `HSLA` and `CMYK`.
    defaultRepresentation: "HEX",
    // Option to keep the color picker always visible. You can still hide / show it via
    // 'pickr.hide()' and 'pickr.show()'. The save button keeps his functionality, so if
    // you click it, it will fire the onSave event.
    showAlways: false,
    // If the color picker should have the body element as it's parent.
    appendToBody: false,
    // Close pickr with this specific key.
    // Default is 'Escape'. Can be the event key or code.
    closeWithKey: "Escape",
    // Defines the position of the color-picker. Available options are
    // top, left and middle relativ to the picker button.
    // If clipping occurs, the color picker will automatically choose his position.
    position: "middle",
    // Enables the ability to change numbers in an input field with the scroll-wheel.
    // To use it set the cursor on a position where a number is and scroll, use ctrl to make steps of five
    adjustableNumbers: true,
    // Show or hide specific components.
    // By default only the palette (and the save button) is visible.
    components: {
      preview: false,
      // Left side color comparison
      opacity: false,
      // Opacity slider
      hue: true,
      // Hue slider
      // Bottom interaction bar, theoretically you could use 'true' as propery.
      // But this would also hide the save-button.
      interaction: {
        hex: true,
        // hex option  (hexadecimal representation of the rgba value)
        rgba: false,
        // rgba option (red green blue and alpha)
        hsla: false,
        // hsla option (hue saturation lightness and alpha)
        hsva: false,
        // hsva option (hue saturation value and alpha)
        cmyk: false,
        // cmyk option (cyan mangenta yellow key )
        input: true,
        // input / output element
        clear: false,
        // Button which provides the ability to select no color,
        save: true // Save button

      }
    },
    // Button strings, brings the possibility to use a language other than English.
    strings: {
      save: "Apply",
      // Default for save button
      clear: "Clear" // Default for clear button

    },

    // User has changed the color
    onChange(hsva, instance) {
      hsva; // HSVa color object, if cleared null

      instance; // Current Pickr instance
    },

    // User has clicked the save button
    onSave(hsva, instance) {
      var hex = hsva.toHEX().toString();
      State.Colors.background = hex;
      manipulateImage();
    }

  });
  const txtPickr = new Pickr({
    // Selector or element which will be replaced with the actual color-picker.
    // Can be a HTMLElement.
    el: ".txtPickr",
    // Using the 'el' Element as button, won't replace it with the pickr-button.
    // If true, appendToBody will also be automatically true.
    useAsButton: false,
    // Start state. If true 'disabled' will be added to the button's classlist.
    disabled: false,
    // If set to false it would directly apply the selected color on the button and preview.
    comparison: true,
    // Default color
    default: State.Colors.text,
    // Default color representation.
    // Valid options are `HEX`, `RGBA`, `HSVA`, `HSLA` and `CMYK`.
    defaultRepresentation: "HEX",
    // Option to keep the color picker always visible. You can still hide / show it via
    // 'pickr.hide()' and 'pickr.show()'. The save button keeps his functionality, so if
    // you click it, it will fire the onSave event.
    showAlways: false,
    // If the color picker should have the body element as it's parent.
    appendToBody: false,
    // Close pickr with this specific key.
    // Default is 'Escape'. Can be the event key or code.
    closeWithKey: "Escape",
    // Defines the position of the color-picker. Available options are
    // top, left and middle relativ to the picker button.
    // If clipping occurs, the color picker will automatically choose his position.
    position: "middle",
    // Enables the ability to change numbers in an input field with the scroll-wheel.
    // To use it set the cursor on a position where a number is and scroll, use ctrl to make steps of five
    adjustableNumbers: true,
    // Show or hide specific components.
    // By default only the palette (and the save button) is visible.
    components: {
      preview: false,
      // Left side color comparison
      opacity: false,
      // Opacity slider
      hue: true,
      // Hue slider
      // Bottom interaction bar, theoretically you could use 'true' as propery.
      // But this would also hide the save-button.
      interaction: {
        hex: true,
        // hex option  (hexadecimal representation of the rgba value)
        rgba: false,
        // rgba option (red green blue and alpha)
        hsla: false,
        // hsla option (hue saturation lightness and alpha)
        hsva: false,
        // hsva option (hue saturation value and alpha)
        cmyk: false,
        // cmyk option (cyan mangenta yellow key )
        input: true,
        // input / output element
        clear: false,
        // Button which provides the ability to select no color,
        save: true // Save button

      }
    },
    // Button strings, brings the possibility to use a language other than English.
    strings: {
      save: "Apply",
      // Default for save button
      clear: "Clear" // Default for clear button

    },

    // User has changed the color
    onChange(hsva, instance) {
      var hex = hsva.toHEX().toString();
      State.Colors.text = hex;
    },

    // User has clicked the save button
    onSave(hsva, instance) {
      var hex = hsva.toHEX().toString();
      State.Colors.text = hex;
    }

  });
  const imgPickr = new Pickr({
    // Selector or element which will be replaced with the actual color-picker.
    // Can be a HTMLElement.
    el: ".imgPickr",
    // Using the 'el' Element as button, won't replace it with the pickr-button.
    // If true, appendToBody will also be automatically true.
    useAsButton: false,
    // Start state. If true 'disabled' will be added to the button's classlist.
    disabled: false,
    // If set to false it would directly apply the selected color on the button and preview.
    comparison: true,
    // Default color
    default: State.Colors.image,
    // Default color representation.
    // Valid options are `HEX`, `RGBA`, `HSVA`, `HSLA` and `CMYK`.
    defaultRepresentation: "HEX",
    // Option to keep the color picker always visible. You can still hide / show it via
    // 'pickr.hide()' and 'pickr.show()'. The save button keeps his functionality, so if
    // you click it, it will fire the onSave event.
    showAlways: false,
    // If the color picker should have the body element as it's parent.
    appendToBody: false,
    // Close pickr with this specific key.
    // Default is 'Escape'. Can be the event key or code.
    closeWithKey: "Escape",
    // Defines the position of the color-picker. Available options are
    // top, left and middle relativ to the picker button.
    // If clipping occurs, the color picker will automatically choose his position.
    position: "middle",
    // Enables the ability to change numbers in an input field with the scroll-wheel.
    // To use it set the cursor on a position where a number is and scroll, use ctrl to make steps of five
    adjustableNumbers: true,
    // Show or hide specific components.
    // By default only the palette (and the save button) is visible.
    components: {
      preview: false,
      // Left side color comparison
      opacity: false,
      // Opacity slider
      hue: true,
      // Hue slider
      // Bottom interaction bar, theoretically you could use 'true' as propery.
      // But this would also hide the save-button.
      interaction: {
        hex: true,
        // hex option  (hexadecimal representation of the rgba value)
        rgba: false,
        // rgba option (red green blue and alpha)
        hsla: false,
        // hsla option (hue saturation lightness and alpha)
        hsva: false,
        // hsva option (hue saturation value and alpha)
        cmyk: false,
        // cmyk option (cyan mangenta yellow key )
        input: true,
        // input / output element
        clear: false,
        // Button which provides the ability to select no color,
        save: true // Save button

      }
    },
    // Button strings, brings the possibility to use a language other than English.
    strings: {
      save: "Apply",
      // Default for save button
      clear: "Clear" // Default for clear button

    },

    // User has changed the color
    onChange(hsva, instance) {},

    // User has clicked the save button
    onSave(hsva, instance) {
      var hex = hsva.toHEX().toString();
      State.Colors.image = hex;
      manipulateImage();
    }

  });
}

function buildExportTool() {
  var tmplt = `	
   
      <button>Save as JPG</button>

      <button>Save Configuration</button>
   `;
  return tmplt;
}

function buildImageSelectButton() {
  var tmplt = `
		<div class="gui-wrapper" id="imageSelectButton">
			<div class="gui-label">File</div>
			<div class="gui-input">
				<button>Select image</button>
			</div>
			<div class="gui-val"></div>
		</div>
	`;
  return tmplt;
} // This function builds the Modal


function buildImagesOverlay() {
  var markupArray = []; // Fetch JSON-file which contains all the filenames of the images

  fetch("./assets/images.json").then(response => response.json()) // Loop through the array
  // and push markup to the markup-array
  .then(json => {
    for (var i = 0; i < json.length; i++) {
      var filename = json[i];
      markupArray.push(`
				<button data-image="${filename}"><img src="./assets/images/${filename}"></button>
			`);
    } // Convert thte markup-array to a string


    var imageOptionsHtml = markupArray.join(""); // And then put the Markup into the #overlay

    $("#overlay").html(imageOptionsHtml);
  }).then(ImagesOverlayDataBinding());
} // ImagesOverlayDataBinding puts the functionality to the buttons


function ImagesOverlayDataBinding() {
  var list = document.getElementById("overlay");
  console.log(list.children.length);

  for (var i = 0; i < list.children.length; i++) {
    list.getElementsByTagName("button")[i].onclick = function () {
      var newImage = this.dataset.image;
      console.log(newImage);
      getNewSourceImage(newImage);
      document.getElementById("overlay").classList.remove("visible");
      document.getElementById("imageSelectButton").querySelector("button").innerHTML = newImage;
    };
  }
}

function buildLayerRadio() {
  var tmplt = `
		<div class="gui-wrapper" id="layerRadio">
			<div class="gui-input">
				<fieldset>
					<div>
						<input class="layer" type="radio" id="mc" name="Layer" value="IMAGE" checked>
						<label for="mc">IMAGE</label> 
					</div>
					<div>
						<input class="layer" type="radio" id="vi" name="Layer" value="HEADLINE">
						<label for="vi">HEADLINE</label>
					</div>
					<div>
						<input class="layer" type="radio" id="te" name="Layer" value="TEXT">
						<label for="te">TEXT</label>
					</div>
				</fieldset>
			</div>
		</div>
	`;
  return tmplt;
}

function buildSelect(id, label, data) {
  var tmplt = `
	<div class="gui-wrapper" id="${id}">
		<div class="gui-label">${label}</div>
		<div class="gui-input">

			<select>

				${data}

			</select>

		</div>
		<div class="gui-val"></div>
	</div>
	`;
  return tmplt;
}

function buildUISlider(id, label, min, max, step, initialVal) {
  var tmplt = `
  <div class="gui-wrapper" id="${id}">
    <div class="gui-label">${label}</div>
    <div class="gui-input">
      <input min="${min}" max="${max}" step="${step}" type="range" value="${initialVal}"/>
    </div>
    <div class="gui-val"></div>
  </div>
  `;
  return tmplt;
}

function buildTextInput(id, label, val) {
  var tmplt = `
	<div class="gui-wrapper" id="${id}">
		<div class="gui-label">${label}</div>
		<div class="gui-input">
			<textarea placeholder="Write something!" onkeyup="this.value" value="${val}" rows="3"/>
		</div>
		<div class="gui-val"></div>
	</div>
	`;
  return tmplt;
}