/*
 =========================================
 SETUP
   =========================================
   */

function setup() {
  imageMode(CENTER);
  rectMode(CENTER);

  // Create canvas
  var canvas = createCanvas(900, 900);
  canvas.parent("sketch");

  // The poster is a PGraphics-element
  poster = createGraphics(586, 810);

  manipulateImage();
  busy = false;

  // gui.js
  buildUI();

  // dust.js
  generateDust();
}

// Function to assign all values from the file-arrays to the gui-select-elements
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
